import { Component } from '@govuk/angularjs-devtools';

@Component({
  bindings: {
    name: '@',
    email: '@',
    telephone: '@',
    position: '@'
  },
  template: `
    <div class="contact-info" itemtype="http://schema.org/Person" itemscope>
      <div itemprop="jobTitle"
           data-ng-if="$ctrl.position"
           data-ng-bind="$ctrl.position"></div>
      <div class="bold-xsmall"
           itemprop="name"
           data-ng-bind="$ctrl.name"></div>
      <div class="font-xsmall"
           itemprop="telephone"
           data-ng-if="$ctrl.telephone"
           data-ng-bind="$ctrl.telephone"></div>
      <a class="font-xsmall"
         itemprop="email"
         data-ng-if="$ctrl.email"
         data-ng-bind="$ctrl.email"
         href="mailto:{{$ctrl.email}}"></a>
    </div>
  `
})
export class ContactInfoComponent {}