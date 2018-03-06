import { Component } from '@cppui/angularjs-devtools';

@Component({
    template: require('./pagination.demo.html')
})
export class PaginationDemo {

    /* tslint:disable: member-ordering:variables-before-functions */
    currentPage_english: number = 10;
    totalItems_english: number = 200;
    onPaginationChange_english(): void {
        console.log('changed to page: ' + this.currentPage_english);
    }

    currentPage_welsh: number = 10;
    totalItems_welsh: number = 200;
    onPaginationChange_welsh(): void {
        console.log('changed to page: ' + this.currentPage_welsh);
    }

    currentPage_onFirstPage: number = 1;
    totalItems_onFirstPage: number = 200;
    onPaginationChange_onFirstPage(): void {
        console.log('changed to page: ' + this.currentPage_onFirstPage);
    }

    currentPage_onLastPage: number = 20;
    totalItems_onLastPage: number = 200;
    onPaginationChange_onLastPage(): void {
        console.log('changed to page: ' + this.currentPage_onLastPage);
    }

    currentPage_fewerItemsPerPage: number = 10;
    totalItems_fewerItemsPerPage: number = 200;
    onPaginationChange_fewerItemsPerPage(): void {
        console.log('changed to page: ' + this.currentPage_fewerItemsPerPage);
    }

    currentPage_maxSize: number = 10;
    totalItems_maxSize: number = 200;
    onPaginationChange_maxSize(): void {
        console.log('changed to page: ' + this.currentPage_fewerItemsPerPage);
    }
}
