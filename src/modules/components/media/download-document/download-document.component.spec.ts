import DownloadDocumentComponent from '../media';

describe('components/media/download-document', function() {

  let $componentController;
  let controller;

  beforeEach(
    angular.mock.module(DownloadDocumentComponent)
  );

  beforeEach(inject(($injector) => {
    $componentController = $injector.get('$componentController');
  }));

  describe('$onInit()', function() {

    it('should default the title to the file name minus the file type suffix', () => {

      // Setup
      let bindings = {
        fileName: 'Test file name.pdf'
      };

      // Test
      controller = $componentController('govDownloadDocument', undefined, bindings);
      controller.$onInit();

      // Assert
      expect(controller.title).toBe('Test file name');

    });

    it('the file name should not override the title if a title has been provided', () => {

      // Setup
      let bindings = {
        fileName: 'Test file name.pdf',
        title: 'Test title'
      };

      // Test
      controller = $componentController('govDownloadDocument', undefined, bindings);
      controller.$onInit();

      // Assert
      expect(controller.title).toBe('Test title');
    });

  });

});
