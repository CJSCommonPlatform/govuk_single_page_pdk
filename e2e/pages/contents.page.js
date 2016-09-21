'use strict';

function ContentPage() {

    //----------------------------------------------------------------------------
    // Page Elements
    //----------------------------------------------------------------------------

    this.typographyLink = element(by.css('a[href="#/content/typography"]'));
    this.colourLink = element(by.css('a[href="#/content/colours"]'));
    this.iconsAndMediaLink = element(by.css('a[href="#/content/icons-media"]'));
    this.buttonsLink = element(by.css('a[href="#/content/buttons"]'))
    this.formElementsLink = element(by.css('a[href="#/content/form-elements"]'));
    this.errorsAndValidationLink = element(by.css('a[href="#/content/errors"]'));
    this.utilityClassesLink = element(by.css('a[href="#/content/utils"]'));
    this.dataLink = element(by.css('a[href="#/content/data"]'));
    this.helperClassesLink = element(by.css('a[href="#/content/helper-classes"]'));

    //----------------------------------------------------------------------------
    // Interaction methods
    //----------------------------------------------------------------------------

    this.go = function() {
        browser.get('#/content');
    };

    this.typographyGo = function() {
        browser.get('#/content/typography');
    };

    this.colourGo = function() {
        browser.get('#/content/colours');
    };

    this.iconsAndMediaGo = function() {
        browser.get('#/content/icons-media');
    };

    this.buttonsGo = function() {
        browser.get('#/content/buttons');
    };

    this.formElementsGo = function() {
        browser.get('#/content/form-elements');
    };

    this.errorsAndValidationGo = function() {
        browser.get('#/content/errors');
    };

    this.utilityClassesGo = function() {
        browser.get('#/content/utils');
    };

    this.dataGo = function() {
        browser.get('#/content/data');
    };

    this.helperClassesGo = function() {
        browser.get('#/content/helper-classes');
    };

    this.clickTypographyLink = function() {
        return this.typographyLink.click();
    };

    this.clickColourLink = function() {
        return this.colourLink.click();
    };

    this.clickIconsAndMediaLink = function() {
        return this.iconsAndMediaLink.click();
    };

    this.clickButtonsLink = function() {
        return this.buttonsLink.click();
    };

    this.clickFormElementsLink = function() {
        return this.formElementsLink.click();
    };

    this.clickErrorsAndValidationLink = function() {
        return this.errorsAndValidationLink.click();
    };

    this.clickUtilityClassesLink = function() {
        return this.utilityClassesLink.click();
    };

    this.clickDataLink = function() {
        return this.dataLink.click();
    };

    this.clickHelperClassesLink = function() {
        return this.helperClassesLink.click();
    };
}

module.exports = ContentPage;