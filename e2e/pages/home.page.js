'use strict';

function HomePage() {

    //----------------------------------------------------------------------------
    // Page Elements
    //----------------------------------------------------------------------------

    this.layoutNavLink = element(by.css('nav a[data-ui-sref="layout"]'));
    this.contentNavLink = element(by.css('nav a[data-ui-sref="content"]'));
    this.componentsNavLink = element(by.css('nav a[data-ui-sref="components"]'));

    //----------------------------------------------------------------------------
    // Interaction methods
    //----------------------------------------------------------------------------

    this.go = function() {
        browser.get('#/');
    };

    this.clickLayoutNavLink = function() {
        return this.layoutNavLink.click();
    };

    this.clickContentNavLink = function() {
        return this.contentNavLink.click();
    };

    this.clickComponentsNavLink = function() {
        return this.componentsNavLink.click();
    };
}

module.exports = HomePage;
