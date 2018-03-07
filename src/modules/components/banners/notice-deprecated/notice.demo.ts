import { Component } from '../../../../util/angular-utils';

@Component({
  template: `
    <h2 class="heading-medium">Notice</h2>
    <p>
      Used to notify a user if there are legal consequences belonging to a subsequent action – 
      for example, a fine or prison sentence.
    </p>
    
    <gov-tabset>
    
      <gov-tab heading="HTML Example">
        <docs-example language="markup">
          <div class="notice">
            <i class="icon icon-important">
              <span class="visuallyhidden">Warning</span>
            </i>
            <strong class="bold-small">
              You can be fined up to £5,000 if you don’t register.
            </strong>
          </div>
        </docs-example>
      </gov-tab>
    
      <gov-tab heading="Angular Markup">
        <docs-example language="markup">
          <gov-notice>You can be fined up to £5,000 if you don’t register.</gov-notice>
        </docs-example>
      </gov-tab>
    
    </gov-tabset>  
  `
})
export class NoticeDemo {}
