import { Component } from '@govuk/angularjs-framework';
import { highlightHTML } from '../../util/prism';

@Component({
  template: highlightHTML(require('./phase-banner.demo.html'))
})
export class PhaseBannerDemo {}