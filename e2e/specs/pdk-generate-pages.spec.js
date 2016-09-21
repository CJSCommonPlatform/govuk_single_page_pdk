/**
 * Want to generate html output in order to run pa11y on it to test accessability
 */
var HomePage            = require('../pages/home.page');
var ComponentsPage      = require('../pages/components.page');
var ContentsPage        = require('../pages/contents.page');
var LayoutPage          = require('../pages/layout.page');
var DocsUtils           = require('../pages/docs-utils.page');

describe('pdk-generate-pages', function() {

  var homePage = new HomePage();
  var componentsPage = new ComponentsPage();
  var contentsPage = new ContentsPage();
  var pauseBeforeNextPageload = 700; // milliseconds

  it('should download the home page', function() {
    homePage.go();
    browser.sleep(pauseBeforeNextPageload);
  });

  //---------------------------------------------------------------------
  // Components
  //---------------------------------------------------------------------
  
  it('should download the components page', function() {
    componentsPage.go();
    browser.sleep(pauseBeforeNextPageload);
  });

  it('should download the banners page', function() {
    componentsPage.bannersGo(); 
    browser.sleep(pauseBeforeNextPageload);
  });

  it('should download the data-visualisation page', function() {
    componentsPage.dataVisualisationGo();
    browser.sleep(pauseBeforeNextPageload);
  });

  it('should download the headers-and-footers page', function() {
    componentsPage.headersAndFootersGo();
    browser.sleep(pauseBeforeNextPageload);
  });

  it('should download the media page', function() {
    componentsPage.mediaGo();
    browser.sleep(pauseBeforeNextPageload);
  });

  it('should download the navigation page', function() {
    componentsPage.navigationGo();
    // This sleep is essential for navigation as it need to wait
    // in order for the page to download properly.
    browser.sleep(pauseBeforeNextPageload);
  });

  it('should download the timeline page', function() {
    componentsPage.timelineGo();
    browser.sleep(pauseBeforeNextPageload);
  });

  it('should download the forms-and-errors page', function() {
    componentsPage.formsAndErrorsGo();
    browser.sleep(pauseBeforeNextPageload);
  });
});