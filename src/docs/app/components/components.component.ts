import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./components.component.html')
})
export class ComponentsPage {
  domains= [
    {name: 'Banners', state:'banners', components: ['Page-title', 'Persist-info', 'Phase-banner']},
    {name: 'Data-Visualisation', state:'data-visualisation', components: ['Contact-info', 'Personal-details', 'Summary-item']},
    {name: 'Headers', state:'headers', components: ['Govuk']},
    {name: 'Media', state:'media', components: ['Image', 'statement']},
    {name: 'Navigation', state:'navigation', components: ['Action-pane', 'Breadcrumbs', 'Next/Previous Navigation']},
    {name: 'Timeline', state:'timeline', components: ['Timeline']}
  ];
}