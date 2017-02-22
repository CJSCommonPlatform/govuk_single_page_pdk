import { Component, Directive } from '@govuk/angularjs-devtools';

export const browserHasDetails = typeof document.createElement('details')['open'] === 'boolean';

let id = 0;

@Component({
  transclude: true,
  template: `<section id="{{::$ctrl.id}}" role="group"></section>`
})
export class DetailsComponent {

  static $inject = ['$element', '$scope', '$transclude'];

  content: any; // ng.IAugmentedJQuery;
  id = `$$details-${id++}`;
  summary: SummaryComponent;

  constructor(
    private $element: ng.IAugmentedJQuery,
    private $scope: ng.IScope,
    private $transclude
  ) {
    this.content = this.$element.children()[0];

    const setAttribute = this.$element[0].setAttribute;
    const removeAttribute = this.$element[0].removeAttribute;
    const self = this;

    this.$element[0].removeAttribute = function () {
      removeAttribute.apply(this, arguments);
      self.render();
    };

    this.$element[0].setAttribute = function () {
      setAttribute.apply(this, arguments);
      self.render();
    };
  }

  get open(): boolean {
    return this.$element[0].hasAttribute('open');
  }

  $onChanges() {
    this.render();
  }

  $postLink() {
    this.$transclude(this.$scope.$parent, contents => {
      angular.forEach(contents, (node: HTMLElement) => {
        if (node.tagName && node.tagName.toLowerCase() === 'summary') {
          this.$element.prepend(node);
        } else {
          this.content.appendChild(node);
        }
      });
    });

    this.render();
  }

  registerControl(summary: SummaryComponent) {
    this.summary = summary;
    this.summary.render();
  }

  render() {
    if (this.open) {
      this.content.removeAttribute('style');
    } else {
      this.content.style = 'display: none';
    }
    if (this.summary) {
      this.summary.render();
    }
  }

  toggleDetails() {
    if (this.open) {
      this.$element[0].removeAttribute('open');
    } else {
      this.$element[0].setAttribute('open', 'open');
    }
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
  id = `$$details-${id++}`;

  constructor(private $element: ng.IAugmentedJQuery, private $scope: ng.IScope) {}

  render() {
    if (this.detailsCtrl.open) {
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

  $postLink() {
    this.$arrow = this.$element.find('i');

    this.$element.attr('aria-controls', this.detailsCtrl.id);
    this.$element.attr('role', 'button');
    this.$element.attr('tabIndex', '0');

    this.detailsCtrl.registerControl(this);

    this.$element.on('keypress', e => {
      if (e.keyCode === 32) {
        e.preventDefault();
      }
    });

    this.$element.on('keyup', e => {
      if (e.keyCode === 13 || e.keyCode === 32) {
        this.detailsCtrl.toggleDetails();
      }
    });

    this.$element.on('mouseup', e => {
      this.detailsCtrl.toggleDetails();
    });
  }
}