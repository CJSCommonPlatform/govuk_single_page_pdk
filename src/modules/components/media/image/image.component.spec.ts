import ImageComponent from '../media';

describe('components/media/image', function() {

  let $componentController;
  let controller;

  beforeEach(
    angular.mock.module(ImageComponent)
  );

  beforeEach(inject(($injector) => {
    $componentController = $injector.get('$componentController');
  }));

  describe('$onInit()', function() {

    it('if exists, should add the download link as the first item of the metadata array', () => {

      // Setup
      const bindings = {
        image: {
          src: '//placehold.it/550x366/DEE0E2/6F777B',
          downloadLink: {
            text: 'Download to your computer',
            onClick: function() {
              console.log('Click on \"Download to your computer\" link');
            }
          },
          metadata: [
            {
              value: 'JPG 256KB'
            }
          ]
        }
      };

      // Test
      controller = $componentController('govImage', {$element: null}, bindings);
      controller.$onInit();

      // Assert
      expect(controller.image.metadata.length).toBe(2);
      expect(controller.image.metadata[0].isDownloadLink).toBe(true);

    });
  });

  describe('$postLink', () => {

    it(`should attach the provided on load function as a load event listener on the image element,`, () => {

      const bindings = {
        onImageLoad: () => false
      };
      const element = jasmine.createSpyObj('element', ['addEventListener']);
      const elementMock = {
        find: () => [element]
      };
      controller = $componentController('govImage', {$element: elementMock}, bindings);
      controller.$postLink();

      expect(element.addEventListener).toHaveBeenCalledWith('load', bindings.onImageLoad);

    });
  });
});
