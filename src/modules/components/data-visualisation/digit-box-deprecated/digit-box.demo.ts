import { Component } from '../../../../util/angular-utils';

@Component({
  template: `
    <h2>Digit box</h2>
    
    <gov-tabset>
    
      <gov-tab heading="HTML Example">
        <docs-example language="markup">
          <div class="digit-box">
            <span class="digit-box-number">4637</span>
          </div>
          <br />
          <br />  
          <div class="digit-box">
            <span class="digit-box-number">07700900753</span>
          </div>
        </docs-example>
      </gov-tab>
    
      <gov-tab heading="Angular Markup">
        <docs-example language="markup">
          <gov-digit-box digit="$ctrl.digit"></gov-digit-box>
        </docs-example>
      </gov-tab>
      
    </gov-tabset>
  `
})
export class DigitBoxDemo {

  digit = 1234;
}
