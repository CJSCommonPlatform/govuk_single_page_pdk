import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./filters.demo.html')
})
export class FiltersDemo {

  filters = [
    {
      name: 'All users',
      filter: '',
      isActive: 'true'
    },
    {
      name: 'Pending users',
      filter: {
        status: 'pending'
      }
    },
    {
      name: 'Administrators only',
      filter: {
        role: 'administrator'
      }
    }
  ];

  tableHeaders = [
    {
      label: 'Name',
      name: 'name'
    },
    {
      label: 'Email address',
      name: 'email'
    }
  ];

  tableData = [
    {
      name: 'CHANT, John',
      email: 'john.chant@gmail.com',
      status: 'active',
      role: 'user',
      onClicks: {
        'name': function() {
          console.log('Clicked on \"CHANT, John\"');
        }
      }
    },
    {
      name: 'FRANCIS, John',
      email: 'john.francis@gmail.com',
      status: 'active',
      role: 'administrator',
      onClicks: {
        'name': function() {
          console.log('Clicked on \"FRANCIS, John\"');
        }
      }
    },
    {
      name: 'SMITH, John',
      email: 'john.smith@gmail.com',
      status: 'pending',
      role: 'administrator',
      onClicks: {
        'name': function() {
          console.log('Clicked on \"SMITH, John\"');
        }
      }
    },
    {
      name: 'O\'CARROL, John',
      email: 'john.ocarrol@gmail.com',
      status: 'pending',
      role: 'user',
      onClicks: {
        'name': function() {
          console.log('Clicked on \"O\'CARROL, John\"');
        }
      }
    }
  ];
}
