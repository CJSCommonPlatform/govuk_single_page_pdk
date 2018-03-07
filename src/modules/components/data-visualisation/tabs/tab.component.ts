import { Component, Directive } from '../../../../util/angular-utils';

import { uuid } from '../../../../util/helpers';

@Component({
  template: `
    <section 
      id="{{::$ctrl.id}}" 
      aria-hidden="{{!$ctrl.active}}" 
      role="tabpanel">        
    </section>  
  `,
  transclude: true,
  bindings: {
    heading: '@',
    selected: '<'
  },
  require: {
    tabsetCtrl: '^pdkTabset'
  }
})
export class TabComponent {

  static $inject = ['$element', '$transclude', '$scope'];

  id = uuid();
  content: any;
  heading: string;
  selected: boolean;
  tabsetCtrl: any;
  tabHeadingNode: any;

  constructor(
    private $element: ng.IAugmentedJQuery,
    public $transclude,
    private $scope: ng.IScope
  ) {}

  get active(): boolean {
    return this.tabsetCtrl.isActive(this);
  }

  $onChanges(changes) {
    if (changes.selected && this.selected) {
      this.tabsetCtrl.select(this, false);
    }
  }

  $onInit() {
    this.tabsetCtrl.add(this);
  }

  $onDestroy() {
    this.tabsetCtrl.remove(this);
  }

  $postLink() {
    const section = this.$element.children()[0];

    this.$transclude(this.$scope.$parent, contents => {
      angular.forEach(contents, node => {
        if (node.tagName && (
            node.hasAttribute('pdk-tab-heading') ||
            node.hasAttribute('data-pdk-tab-heading') ||
            node.tagName.toLowerCase() === 'pdk-tab-heading'
        )) {
          this.tabHeadingNode = node;
        } else {
          section.appendChild(node);
        }
      });
    });
  }
}


@Directive()
export class TranscludeTabHeadingDirective {

  static $inject = ['$scope', '$attrs', '$element'];

  constructor(
    private $scope: ng.IScope,
    private $attrs: { transcludeTabHeading: string },
    private $element: ng.IAugmentedJQuery
  ) {}

  $postLink() {
    this.$scope.$watch(this.$attrs.transcludeTabHeading, (tab: TabComponent) => {
      if (tab && tab.tabHeadingNode) {
        this.$element.empty();
        this.$element.append(tab.tabHeadingNode);
      }
    });
  }
}
