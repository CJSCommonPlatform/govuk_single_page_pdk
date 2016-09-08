import { Component } from '@govuk/angularjs-devtools';
import { isArray } from 'angular';

@Component({
  bindings: {
    metadata: '<'
  },
  template: require('./column-navigation-related-metadata.component.html')
})
export class ColumnNavigationRelatedMetadataComponent {

  metadata: any;

  $onInit(): void {

    /**
     * The user can pass in a single metadata object rather than
     * an array of metadata objects if they want, but it is converted
     * here to an array.
     */
    if(this.metadata && !isArray(this.metadata)) {
      this.metadata = [this.metadata];
    }
  }
}
