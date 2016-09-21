'use strict';

function DocsUtils() {

    //----------------------------------------------------------------------------
    // Page Elements
    //----------------------------------------------------------------------------

    this.govTabsetByDemoId = element(by.id(demoId)).element(by.css('gov-tabset'));

    //----------------------------------------------------------------------------
    // Interaction methods
    //----------------------------------------------------------------------------

    this.clickHTMLTabForDemoId = function(demoId) {
        return this.govTabsetByDemoId(demoId)
            .element(by.cssContainingText('a', 'HTML Example')).click();
    };

    this.clickAngularTabForDemoId = function(demoId) {
        return this.govTabsetByDemoId(demoId)
            .element(by.cssContainingText('a', 'Angular Markup')).click();
    };
}

module.exports = DocsUtils;