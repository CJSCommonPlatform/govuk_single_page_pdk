import { Component } from '../../../../util/angular-utils';

@Component({
  template: require('./next-previous-navigation.demo.html')
})
export class NextPreviousNavigationDemo {
  navigation = {
    previous: {
      name: 'Previous',
      description: 'Overview',
      usageInstructions: 'Navigate to previous part',
      navigate: function() {
        console.log('Previous');
      }
    },

    next: {
      name: 'Next',
      description: 'Give away business property or assets',
      usageInstructions: 'Navigate to next part',
      navigate: function() {
        console.log('Next');
      }
    }
  };
}
