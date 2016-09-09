import TabsetComponent from '../data-visualisation';

describe('components/data-visualisation/tab', () => {

    let scope: any;
    let element: any;
    let tabElement: any;
    let html: any = `
        <gov-tabset>
          <gov-tab heading="test1"><p>test1</p></gov-tab>
          <gov-tab heading="test2"><p>test2</p></gov-tab>
          <gov-tab heading="test3"><p>test3</p></gov-tab>
        </gov-tabset>
        `;
    let $timeout;

    beforeEach(
        angular.mock.module(TabsetComponent)
    );

    beforeEach(inject((_$timeout_:  ng.ITimeoutService) => {
        $timeout  = _$timeout_;
    }));

    function compile(htmlCode: string) {
        inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService, $document: ng.IDocumentService) => {
            scope = $rootScope.$new();
            element = $compile(htmlCode)(scope);
            $document.find('body').append(element);
            scope.$digest();
        });
    }

    it('Checks selected element content is visible after changing tabs with arrow', () => {
        compile(html);
        tabElement = element.find('p:contains("test1")');
        expect(tabElement).toBeVisible();

        let tabList = element.find('[role="tablist"]');
        tabList.triggerHandler({ type: 'keydown', keyCode: 39 });

        tabElement = element.find('p:contains("test2")');
        expect(tabElement).toBeVisible();

        tabList.triggerHandler({ type: 'keydown', keyCode: 39 });

        tabElement = element.find('p:contains("test3")');
        expect(tabElement).toBeVisible();

        tabList.triggerHandler({ type: 'keydown', keyCode: 39 });

        tabElement = element.find('p:contains("test3")');
        expect(tabElement).toBeVisible();

        tabList.triggerHandler({ type: 'keydown', keyCode: 37 });

        tabElement = element.find('p:contains("test2")');
        expect(tabElement).toBeVisible();

    });
});
