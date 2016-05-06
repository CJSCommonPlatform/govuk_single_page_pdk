
describe('context one page', function() {
  
  beforeEach(function() {
    browser.get('/context-one');
  });

  it('has the correct heading', function() {
    expect(element(by.tagName('h1')).getText()).toEqual('Component A');
  });
});