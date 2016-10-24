import govShowHidePane from '../data-visualisation';

describe('components/data-visualisation/show-hide-pane', () => {

    let scope: any;
    let element: any;
    let html: any = `
        <gov-show-hide-pane>
            <always-visible>
              <h3 class="heading-medium">This headblock is always visible</h3>
            </always-visible>
            <hideable>
                <p>abc</p>
            </hideable>
        </gov-show-hide-pane>
        `;

    beforeEach(angular.mock.module(govShowHidePane));

    function compile(htmlCode: string) {
        inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService, $document: ng.IDocumentService) => {
            scope = $rootScope.$new();
            element = $compile(htmlCode)(scope);
            $document.find('body').append(element);
            scope.$digest();
        });
    }

    it('Checks open shows the transcluded element', () => {
        compile(html);
        let toggleElement = element.find('p:contains("abc")');
        expect(toggleElement).toBeVisible();

        element.find('button').click();
        expect(toggleElement).not.toBeVisible();

        element.find('button').click();
        toggleElement = element.find('p:contains("abc")');
        expect(toggleElement).toBeVisible();
    });
});
