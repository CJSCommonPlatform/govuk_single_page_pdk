import {Component} from '@govuk/angularjs-devtools';

@Component({
    template: require('./index.component.html')
})
export class ComponentsPage {
    domains = [
        {name: 'Banners', state: 'components.banners', components: ['Page-title', 'Persist-info', 'Phase-banner']},
        {
            name: 'Data-Visualisation',
            state: 'components.data-visualisation',
            components: ['Contact-info', 'Personal-details', 'Summary-item', 'Tab', 'Show/Hide Pane']
        },
        {name: 'Headers and Footers', state: 'components.headers', components: ['Govuk header', 'Govuk footer']},
        {name: 'Media', state: 'components.media', components: ['Image', 'statement']},
        {
            name: 'Navigation',
            state: 'components.navigation',
            components: [
                'Action-pane', 'Breadcrumbs', 'Next/Previous Navigation', 'Side Menu', 'Start Action Bar',
                'Completed Action Bar']
        },
        {name: 'Timeline', state: 'components.timeline', components: ['Timeline']}
    ];
}