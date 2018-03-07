import { Component } from '../../../../util/angular-utils';

@Component({
    bindings: {
        currentPage: '=',
        totalItems: '=',
        onPaginationChange: '&',
        // Text for previous link
        // optional parameter - defaults to 'Previous'
        previousText: '@?',
        // Text for next link
        // optional parameter - defaults to 'Next'
        nextText: '@?',
        // Whether to always display the first and last page numbers
        // options parameter - defaults to false
        boundaryLinkNumbers: '@?',
        // Max number of pagination pages visible
        // optional parameter - defaults to 5
        maxSize: '<?',
        // Used to calculate how many pages there are
        // optional parameter - defaults to 10
        itemsPerPage: '@?'
    },
    template: require('./pagination.component.html')
})
export class PaginationComponent {

  static $inject = ['$templateCache', 'uibPaginationConfig'];

  maxSize: any;
  itemsPerPage: any;
  boundaryLinkNumbers: any;

  constructor(
    private $templateCache: any,
    private uibPaginationConfig: any
  ) {}

  $onInit(): void {

    this.$templateCache.put(
      'uib/template/pagination/pagination.html',
      require('./uib-pagination-custom-template.html')
    );

    // Items Per Page defaults to 10
    if (this.itemsPerPage) {
      this.itemsPerPage = parseInt(this.itemsPerPage, 10);
    } else {
      this.itemsPerPage = 10;
    }

    // Max Size defaults to 5
    if (!this.maxSize) {
      this.maxSize = '5';
    }

    // Boundary Link Numbers default to true
    if (this.boundaryLinkNumbers && this.boundaryLinkNumbers === 'false') {
      this.boundaryLinkNumbers = false;
    } else {
      this.boundaryLinkNumbers = true;
    }
  }
}
