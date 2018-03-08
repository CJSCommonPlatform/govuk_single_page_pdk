import { Component } from '../../../../util/angular-utils';

@Component({
  template: require('./contact-info.demo.html')
})
export class ContactInfoDemo {
  private person = {
    position: 'Supervisor officer',
    name: 'DS Amelia Hicks',
    phone: '0151 123 4567',
    email: 'hicksa@liverpool.police.uk'
  };
}
