import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: `
  <h2>Digit box</h2>
  <gov-tabset>
    <gov-tab heading="HTML Example">
      <docs-example markup>
<div class="gov-digit-box">
1234
</div>
      </docs-example>
    </gov-tab>
    <gov-tab heading="Angular Example">
      <docs-example markup>
        <gov-digit-box digit="$ctrl.digit"></gov-digit-box>
      </docs-example>
    </gov-tab>
  </gov-tabset>
  `
})
export class DigitBoxDemo {
  private digit = 1234;
}