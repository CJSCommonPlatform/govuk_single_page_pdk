import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: `
    <h2 class="heading-medium">Action bar</h2>
    <p>
      This component provides the option to display success button to proceed and optional cancelation
      link. The values as well as the functions that they should call must be provided.
    </p>
    
    <gov-tabset>
    
      <gov-tab heading="HTML Example">
        <docs-example language="markup">
          <div class="form-actions">
              <button class="button" ng-click="$ctrl.onSubmit()">Submit</button>
              <a href="" ng-if="true" ng-click="$ctrl.onCancel()">Cancel</a>
          </div>
        </docs-example>
      </gov-tab>
    
      <gov-tab heading="Angular Markup">
        <docs-example language="markup">
          <gov-action-bar submit-button-text="Submit" on-submit="$ctrl.onSubmit()" 
                            on-cancel="$ctrl.onCancel()"></gov-action-bar>
        </docs-example>
      </gov-tab>
      
      <gov-tab heading="Data">
        <prismify language="javascript">
          this.onSubmit = function() {
            console.log('On submit');
          },
           
          this.onCancel = function() {
            console.log('On cancel');
          }
        </prismify>
      </gov-tab>
    
    </gov-tabset>  
  `
})
export class ActionBarDemo {

  onSubmit() {
    console.log('On submit');
  }

  onCancel() {
    console.log('On cancel');
  }
}