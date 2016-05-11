import { Component } from '@govuk/angularjs-framework';
import { highlightHTML } from '../../../util/prism';

@Component({
  template: highlightHTML(require('./govuk-header.demo.html'))
})
export class GovUkHeaderDemo {}