import dataVisualisation from '../data-visualisation';

describe('collapsible', () => {

  let $compile: ng.ICompileService;
  let body: any;
  let scope: any;

  beforeEach(angular.mock.module(dataVisualisation));
  beforeEach(inject(($injector, $rootScope) => {
    scope = $rootScope.$new();
    body  = $injector.get('$document').find('body');
    $compile = $injector.get('$compile');
  }));

  function compile(html: string) {
    const element = $compile(html)(scope);
    body.append(element);
    scope.$digest();
    return element;
  }

  it('toggles the visibility of elements with the `collapse` attribute', () => {
    const element = compile(`
      <pdk-collapsible>
        <h1>Static</h1>
        <p collapse>Dynamic</p>
      </pdk-collapsible>
    `);
    const toggle = element.find('button');
    expect(element.find('h1')).toBeVisible();
    expect(element.find('p')).toBeVisible();
    toggle.click();
    expect(element.find('h1')).toBeVisible();
    expect(element.find('p')).not.toBeVisible();
    toggle.click();
    expect(element.find('h1')).toBeVisible();
    expect(element.find('p')).toBeVisible();
  });

  it('sets the collapsible content visibility according to the `collapsed` binding', () => {
    scope.collapsed = true;
    const element = compile(`
      <pdk-collapsible collapsed="collapsed">
        <p collapse>Dnyamic</p>
      </pdk-collapsible>
    `);
    expect(element.find('p')).not.toBeVisible();
    scope.collapsed = false;
    scope.$digest();
    expect(element.find('p')).toBeVisible();
  });

  it('displays the default or defined button labels', () => {
    let element;
    element = compile(`<pdk-collapsible></pdk-collapsible>`);
    expect(element.find('button')).toContainText('Hide');
    element.find('button').click();
    expect(element.find('button')).toContainText('Show');
    element = compile(`
      <pdk-collapsible open-label="Foo" collapsed-label="Bar"></pdk-collapsible>
    `);
    expect(element.find('button')).toContainText('Foo');
    element.find('button').click();
    expect(element.find('button')).toContainText('Bar');
  });
});
