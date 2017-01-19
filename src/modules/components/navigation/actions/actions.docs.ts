import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./actions.docs.html')
})
export class ActionDocs {

  filter = 'MARKUP';
  outcome = true;

  charges = [
    {id: 0, status: 'STARTED'},
    {id: 1, status: 'STARTED'},
    {id: 2, status: 'REPLACED', proposedCharge: 'Grievous Bodily Harm'},
    {id: 1, status: 'STARTED'},
    {id: 3, status: 'ACCEPTED', authorisedCharge: 'Harrassment'},
    {id: 2, status: 'REJECTED', authorisedCharge: 'Harrassment'}
  ];

  saved = 2;
}