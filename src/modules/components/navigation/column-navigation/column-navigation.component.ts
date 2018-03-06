import { Component } from '@cppui/angularjs-devtools';
import { isArray } from 'angular';

@Component({
  bindings: {
    sections: '<',
    metadata: '<'
  },
  template: require('./column-navigation.component.html')
})
export class ColumnNavigationComponent {

  metadata: any;

  $onInit(): void {

    /**
     * The user can pass in a single metadata object rather than
     * an array of metadata objects if they want, but it is converted
     * here to an array.
     */
    if (this.metadata && !isArray(this.metadata)) {
      this.metadata = [this.metadata];
    }
  }
}
