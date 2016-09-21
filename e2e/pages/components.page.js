'use strict';

function ComponentsPage() {

    //----------------------------------------------------------------------------
    // Page Elements
    //----------------------------------------------------------------------------

    this.bannersLink = element(by.css('a[href="#/components/banners"]'));
    this.dataVisualisationLink = element(by.css('a[href="#/components/data-visualisation"]'));
    this.headersAndFootersLink = element(by.css('a[href="#/components/headers"]'));
    this.mediaLink = element(by.css('a[href="#/components/media"]'));
    this.navigationLink = element(by.css('a[href="#/components/navigation"]'));
    this.timelineLink = element(by.css('a[href="#/components/timeline"]'));
    this.formsAndErrorsLink = element(by.css('a[href="#/components/forms-and-errors"]'));

    //----------------------------------------------------------------------------
    // Interaction methods
    //----------------------------------------------------------------------------

    this.go = function() {
        browser.get('#/components');
    };

    this.bannersGo = function() {
        browser.get('#/components/banners');
    };

    this.dataVisualisationGo = function() {
        browser.get('#/components/data-visualisation');
    };

    this.headersAndFootersGo = function() {
        browser.get('#/components/headers');
    };

    this.mediaGo = function() {
        browser.get('#/components/media');
    };

    this.navigationGo = function() {
        browser.get('#/components/navigation');
    };

    this.timelineGo = function() {
        browser.get('#/components/timeline');
    };

    this.formsAndErrorsGo = function() {
        browser.get('#/components/forms-and-errors');
    };

    this.clickBannersLink = function() {
        return this.bannersLink.click();
    };

    this.clickDataVisualisationLink = function() {
        return this.dataVisualisationLink.click();
    };

    this.clickHeadersAndFootersLink = function() {
        return this.headersAndFootersLink.click();
    };

    this.clickMediaLink = function() {
        return this.mediaLink.click();
    };

    this.clickNavigationLink = function() {
        return this.navigationLink.click();
    };

    this.clickTimelineLink = function() {
        return this.timelineLink.click();
    };

    this.clickFormsAndErrorsLink = function() {
        return this.formsAndErrorsLink.click();
    };
}

module.exports = ComponentsPage;
