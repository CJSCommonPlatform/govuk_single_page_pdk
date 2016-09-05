import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    navigation: '<'
  },
  template: require('./next-previous-navigation.component.html')
})
export class NextPreviousNavigationComponent {

    navigation: any;

    $onInit(): void {

        /**
         * The anchor (<a>) elements require a title attribute that will give
         * screen readers information about what the anchor does. If this information
         * has not been provided by 'usageInstructions', then the text will 
         * default to the relevant description.
         */
        if (!this.navigation.previous.usageInstructions) {
            this.navigation.previous.usageInstructions = this.navigation.previous.description;
        }

        if (!this.navigation.next.usageInstructions) {
            this.navigation.next.usageInstructions = this.navigation.next.description;
        }
    }
}