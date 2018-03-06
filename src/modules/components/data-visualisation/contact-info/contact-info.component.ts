import { Component } from '@cppui/angularjs-devtools';

@Component({
  bindings: {
    name: '@',
    email: '@',
    telephone: '@',
    position: '@'
  },
  template: `
    <div class="contact-info" itemtype="http://schema.org/Person" itemscope>
      <div data-ng-if="$ctrl.position">
        <span class="visuallyhidden">Position</span>
        <span itemprop="jobTitle" data-ng-bind="$ctrl.position"></span>
      </div>      
      <div class="bold-xsmall">
        <span class="visuallyhidden">Name</span>
        <span itemprop="name" data-ng-bind="$ctrl.name"></span>
      </div>
      <div data-ng-if="$ctrl.telephone" class="font-xsmall">
        <span class="visuallyhidden">Telephone</span>
        <span itemprop="telephone" data-ng-bind="$ctrl.telephone"></span>
      </div>
      <div data-ng-if="$ctrl.email" class="font-xsmall">
        <span class="visuallyhidden">Email address</span>
        <a href="mailto:{{$ctrl.email}}" itemprop="email" data-ng-bind="$ctrl.email"></a>
      </div>  
    </div>
  `
})
export class ContactInfoComponent {}
