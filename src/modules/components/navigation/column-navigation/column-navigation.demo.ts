import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./column-navigation.demo.html')
})
export class ColumnNavigationDemo {

  example1 = {

    column1: {

      links: [
        {
          text: 'View this user\'s details',
          onClick: function() {
            console.log('Clicked \"Viewing the user\'s details\"');
          }
        },
        {
          text: 'Search for user in this organisation',
          onClick: function() {
            console.log('Clicked on \"Search for user in this organisation\"');
          }
        },
        {
          text: 'Search for another organisation',
          onClick: function() {
            console.log('Clicked on \"Search for another organisation\"');
          }
        },
        {
          text: 'More',
          isBold: true,
          onClick: function() {
            console.log('Clicked on \"More\"');
          }
        }
      ]
    }
  };

  example2 = {

    column1: {

      metadata: {
        text: 'This user last signed in on 13 December 2015 at 2:36pm'
      },

      links: [
        {
          text: 'Search for another user',
          onClick: function() {
            console.log('Clicked on \"Search for another user\"');
          }
        }
      ]
    },

    column2: {

      metadata: [
        {
          text: 'This user’s account will be suspended on 17 March 2017'
        },
        {
          text: 'This user last signed in on 13 December 2015 at 2:36pm'
        }
      ],

      links: [
        {
          text: 'Search for another user',
          onClick: function() {
            console.log('Clicked on \"Search for another user\"');
          }
        }
      ]
    }
  };

  example3 = {

    column1: {

      section1heading: 'Actions for this org',

      section1links: [
        {
          text: 'View organisation\'s details',
          onClick: function() {
            console.log('Clicked on \"View organisation\'s details\"');
          }
        }
      ],

      section2heading: 'Other actions',

      section2links: [
        {
          text: 'Search for another organisation',
          onClick: function() {
            console.log('Clicked on \"Search for another organisation\"');
          }
        },
        {
          text: 'Search all users',
          onClick: function() {
            console.log('Clicked on \"Search all users\"');
          }
        }
      ]
    },

    column2: {

      section1heading: 'To do',

      section1links: [
        {
          text: 'View case material',
          onClick: function() {
            console.log('Clicked on \"View case material\"');
          }
        },
        {
          text: 'Enter analysis and charging decisions',
          onClick: function() {
            console.log('Clicked on \"Enter analysis and charging decisions\"');
          }
        },
        {
          text: 'Create action plan',
          onClick: function() {
            console.log('Clicked on \"Create action plan\"');
          }
        }
      ],
    }
  };
}
