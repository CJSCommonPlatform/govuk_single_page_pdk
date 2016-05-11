import { Component } from '@govuk/angularjs-framework';
import { highlightHTML } from '../../util/prism';

@Component({
  template: highlightHTML(require('./breadcrumbs.demo.html'))
})
export class BreadcrumbsDemo {}