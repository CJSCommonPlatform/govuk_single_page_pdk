import dataVisualisation from '../data-visualisation';

describe('components/data-visualisation/dataset', () => {

  let scope: any;
  let element: any;

  function template(options: any = {}) {
    const onChange = options.changeLink ? 'on-change="callback()"' : '';
    const description = options.description ? 'description="test desc"' : '';
    const textLink = options.textLink ? 'text-link="' + options.textLink + '"' : '';
    const showLink = options.showLink ? 'show-link=false' : '';
    return `
      <gov-dataset ${onChange} ${description} ${textLink} ${showLink}>
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

  it('shows `Change` link when the showLink is not provided', () => {
    compile(template());
    console.log(element);
    expect(element.find('a').text()).toBe('Change');
  });

  it('does not show `Change` link when showLink is provided', () => {
    compile(template({ showLink: true }));
    console.log(element);
    expect(element.find('a')[0]).toBeUndefined();
  });

  it('invokes the `on-change` callback when the change link is clicked', () => {
    compile(template({ changeLink: true }));
    scope.callback = sinon.spy();
    scope.$digest();
    element.find('.gov-dataset-change a').click();
    expect(scope.callback).toHaveBeenCalled();
  });

  it('renders hidden change link description when description is provided', () => {
     compile(template({ changeLink: true, description: true }));
     expect(element.find('a span.visuallyhidden').text()).toBe(' test desc');
  });

  it('does not render hidden change link description when description is not provided', () => {
     compile(template({ changeLink: true }));
     expect(element.find('a span.visuallyhidden')[0]).toBeUndefined();
  });

  it('link name should be the one provided as an attribute in the component', () => {
    compile(template({ changeLink: true, textLink: 'Any text' }));
    expect(element.find('a').text()).toBe('Any text');
  });
});
