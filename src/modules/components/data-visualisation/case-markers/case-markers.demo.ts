import { Component } from '@govuk/angularjs-devtools';

@Component({
  template: require('./case-markers.demo.html')
})
export class CaseMarkersDemo {
    private caseMarkerSingle = {
        markers: [
            'Domestic violence'
        ]
    };
    private caseMarkerWithHeading = {
        markers: [
            'Domestic violence',
            'Offender'
        ],
        heading: 'Case markers'
    };
}