import dataVisualisation from '../data-visualisation';

describe('components/data-visualisation/dataset', () => {

  let scope: any;
  let element: any;

  function template(withChangeLink) {
    const onChange = withChangeLink ? 'on-change="callback()"' : '';
    return `
      <gov-dataset ${onChange}>
        <div class="data-item">
          <div class="label">Email</div>
          <div class="value">jack.smith@gov.uk</div>
        </div>
      </gov-dataset>`;
  }

  beforeEach(angular.mock.module(dataVisualisation));

  function compile(html: string) {
    inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) => {
      scope = $rootScope.$new();
      element = $compile(html)(scope);
      scope.$digest();
    });
  }

  it('shows `Change` link when the on-change callback is provided', () => {
    compile(template(true));
    expect(element.find('a').text()).toBe('Change');
  });

  it('does not show `Change` link when the on-change callback is provided', () => {
    compile(template(false));
    expect(element.find('a')[0]).toBeUndefined();
  });

  it('invokes the `on-change` callback when the change link is clicked', () => {
    compile(template(true));
    scope.callback = sinon.spy();
    scope.$digest();
    element.find('.gov-dataset-change a').click();
    expect(scope.callback).toHaveBeenCalled();
  });
});
