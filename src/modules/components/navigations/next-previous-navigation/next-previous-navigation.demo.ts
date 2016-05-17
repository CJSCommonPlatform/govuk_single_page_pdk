import { Component } from '@govuk/angularjs-framework';
require('./next-previous-navigation.scss');

@Component({
  template: require('./next-previous-navigation.demo.html')
})
export class NextPreviousNavigationDemo {
  navigation = {
    previous: {
      name: 'Previous',
      description: 'Some Description',
      navigate: function(){
        console.log('Previous');
      }
    },

    next: {
      name: 'Next',
      description: 'Some Description',
      navigate: function(){
        console.log('Next');
      }
    }
  };
}