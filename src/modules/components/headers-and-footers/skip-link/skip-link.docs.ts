import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: `
    <h3 class="heading-medium mb-l">Skip Link</h3>

    <div class="grid-row">

      <div class="column-one-third font-xsmall">
        <p>
          The <b>pdk-skip-link</b> component is used to provide a link to screen readers
          that skips to the main content of a page.
        </p>
        <h3 class="heading-small mb-m">Configuration</h3>
        <ul class="list list-docs">
          <li>
            <code class="code">target-id</code>
            <em class="text-secondary">(Default: content)</em>
            The id of the element to which to scroll when the skiplink is used.
          </li>
        </ul>  
      </div>

      <div class="column-two-thirds font-xsmall">
        <prismify language="html">
          <pdk-skip-link></pdk-skip-link>
        </prismify>
      </div>
    </div>
  `
})
export class SkipLinkDocs {}
