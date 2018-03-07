import { Directive } from '../../../../util/angular-utils';

@Directive({
  restrict: 'A',
  require: {
    angularFormController: 'form'
  },
  bindToController: true,
  controllerAs: '$ctrl',
  scope: {
    validation: '=lazyValidation',
    afterValidate: '&'
  }
})
export class LazyValidationDirective {

  private afterValidate: Function;
  private validation: ng.IFormController;
  private angularFormController: ng.IFormController;

  createDeepCopy (validationData): ng.IFormController {
    return angular.copy(validationData);
  }

  revalidate(invokeCallbacks = true): void {
    this.validation = this.createDeepCopy(this.angularFormController);
    if (invokeCallbacks) {
      this.afterValidate({ $event: this.angularFormController.$error });
    }
  };

  isValid(): boolean {
    return this.validation.$valid;
  };

  $postLink(): void {
    this.revalidate(false);
  }
}
