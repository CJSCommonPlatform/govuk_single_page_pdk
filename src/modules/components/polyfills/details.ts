import { Component, Directive } from '@govuk/angularjs-devtools';

export const browserHasDetails = typeof document.createElement('details')['open'] === 'boolean';

let id = 0;

@Component({
  transclude: true,
  template: `<section id="{{::$ctrl.id}}" role="group"></section>`
})
export class DetailsComponent {

  static $inject = ['$element', '$scope', '$transclude'];

  content: ng.IAugmentedJQuery;
  expanded = false;
  id = `$$details-${id++}`;

  constructor(
    private $element: ng.IAugmentedJQuery,
    private $scope: ng.IScope,
    private $transclude
  ) {}

  render() {
    this.content.attr('aria-hidden', String(!this.expanded));
    this.content.attr('aria-expanded', String(this.expanded));
    this.content.attr('style', this.expanded ? '' : 'display: none');
  }

  toggleDetails() {
    this.expanded = !this.expanded;
    this.render();
  }

  $postLink() {
    const $details = this.$element;
    const summary = this.$element[0].querySelector('span');

    this.content = this.$element.find('section');

    this.$transclude(this.$scope.$parent, contents => {
      angular.forEach(contents, (node: HTMLElement) => {
        if (node.tagName && node.tagName.toLowerCase() === 'summary') {
          this.$element.prepend(node);
        } else {
          this.content.append(node);
        }
      });
    });

    this.render();
  }
}

@Component({
  template: `
    <i class="arrow" aria-hidden="true"></i>
    <span class="summary" data-ng-transclude></span>
  `,
  transclude: true,
  require: {
    detailsCtrl: '^details'
  }
})
export class SummaryComponent {

  static $inject = ['$element', '$scope'];

  $arrow: ng.IAugmentedJQuery;
  detailsCtrl: DetailsComponent;
  expanded = false;
  id = `$$details-${id++}`;

  constructor(private $element: ng.IAugmentedJQuery, private $scope: ng.IScope) {}

  render() {
    if (this.detailsCtrl.expanded) {
      this.$element.attr('aria-expanded', 'true');
      this.$element.addClass('arrow-open');
      this.$element.removeClass('arrow-closed');
      this.$arrow.text('\u25bc');
    } else {
      this.$element.attr('aria-expanded', 'false');
      this.$element.addClass('arrow-closed');
      this.$element.removeClass('arrow-open');
      this.$arrow.text('\u25ba');
    }
  }

  toggle() {
    this.detailsCtrl.toggleDetails();
    this.render();
  }

  $postLink() {
    this.$arrow = this.$element.find('i');

    this.$element.attr('aria-controls', this.detailsCtrl.id);
    this.$element.attr('aria-expanded', String(this.detailsCtrl.expanded));
    this.$element.attr('role', 'button');
    this.$element.attr('tabIndex', '0');

    this.render();

    this.$element.on('keypress', e => {
      if (e.keyCode === 32) {
        e.preventDefault();
      }
    });

    this.$element.on('keyup', e => {
      if (e.keyCode === 13 || e.keyCode === 32) {
        this.toggle();
      }
    });

    this.$element.on('mouseup', e => {
      this.toggle();
    });
  }
}