import { Directive } from '@govuk/angularjs-devtools';

@Directive({
  restrict: 'C'
})
export class BlockLabelDirective {

  static $inject = ['$element'];

  private input: ng.IAugmentedJQuery;

  constructor(private $element: ng.IAugmentedJQuery) {}

  $postLink() {
    this.input = this.$element.find('input');
    this.input.on('focus',    () => this.$element.addClass('focused'));
    this.input.on('focusin',  () => this.$element.addClass('focused'));
    this.input.on('blur',     () => this.$element.removeClass('focused'));
    this.input.on('focusout', () => this.$element.removeClass('focused'));
  }
}