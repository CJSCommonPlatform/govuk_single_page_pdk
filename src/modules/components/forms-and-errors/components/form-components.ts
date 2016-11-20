import { Component } from '@govuk/angularjs-devtools';

import { uuid } from '../../../../util/helpers';

@Component({
  transclude: true,
  template: `
    <div data-ng-class="{error: $ctrl.control.$invalid}">
      <fieldset data-ng-if="$ctrl.multiInput" data-ng-transclude></fieldset>
      <div data-ng-if="!$ctrl.multiInput" data-ng-transclude ></div>    
    </div>
  `
})
export class ContainerComponent {

  control: ng.INgModelController;
  identifier: string = uuid();
  multiInput: boolean;

  setMultiInput(val: boolean) {
    this.multiInput = val;
  }

  setControl(ngModel: ng.INgModelController) {
    this.control = ngModel;
  }
}


@Component({
  template: `
    <legend data-ng-if="$ctrl.multiInput" data-ng-transclude></legend>
    <label class="form-label"
           for="{{::$ctrl.identifier}}"
           data-ng-if="!$ctrl.multiInput"
           data-ng-transclude>           
    </label>
  `,
  transclude: true,
  require: {
    container: '^pdkFormGroup'
  }
})
export class LabelComponent {

  static $inject = ['$scope'];

  container: ContainerComponent;
  multiInput: boolean;

  constructor(private $scope: ng.IScope) {}

  $onInit() {
    const cancel = this.$scope.$watch(
      () => this.container.multiInput,
      multiInput => {
        if (angular.isDefined(multiInput)) {
          this.multiInput = multiInput;
          cancel();
        }
      }
    );
  }
}