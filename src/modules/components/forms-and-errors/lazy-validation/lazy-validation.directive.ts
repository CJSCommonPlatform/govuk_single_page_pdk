import { Directive } from '@govuk/angularjs-devtools';

@Directive({
  restrict: 'A',
  require: {
    angularFormController: 'form'
  },
  bindToController: true,
  controllerAs: '$ctrl',
  scope: {
    validation: '=lazyValidation'
  }
})
export class LazyValidationDirective {

  private validation: ng.IFormController;
  private angularFormController: ng.IFormController;

  createDeepCopy (validationData): ng.IFormController {
    return angular.copy(validationData);
  }

  revalidate(): void {
    this.validation = this.createDeepCopy(this.angularFormController);
  };

  isValid(): boolean {
    return this.validation.$valid;
  };

  $postLink(): void {
    this.revalidate();
  }
}