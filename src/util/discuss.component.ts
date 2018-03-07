import { Component } from './angular-utils';

@Component({
  bindings: {
    issue: '<'
  },
  template: `
      <a href="https://github.com/CJSCommonPlatform/govuk_single_page_pdk/issues/{{$ctrl.issue}}"
         target="_blank">Discuss the component</a>`
})
export class DiscussComponent {}
