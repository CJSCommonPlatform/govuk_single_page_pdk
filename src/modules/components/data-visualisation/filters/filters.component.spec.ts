import FiltersComponent from '../data-visualisation';

describe('components/data-visualisation/filters', function() {

  let $componentController;
  let controller;

  beforeEach(
    angular.mock.module(FiltersComponent)
  );

  beforeEach(inject(($injector) => {
    $componentController = $injector.get('$componentController');
  }));

  describe('$onInit()', function() {

    let secondFilterIsActive = [
      {
        name: 'All users',
        filter: ''
      },
      {
        name: 'Pending users',
        filter: {
          status: 'pending'
        },
        isActive: true
      },
      {
        name: 'Administrators only',
        filter: {
          role: 'administrator'
        }
      }
    ];

    let noFilterDefinedAsActive = [
      {
        name: 'All users',
        filter: ''
      },
      {
        name: 'Pending users',
        filter: {
          status: 'pending'
        }
      },
      {
        name: 'Administrators only',
        filter: {
          role: 'administrator'
        }
      }
    ];

    it('should activate the filter defined as active in the data', () => {

      // Setup
      let bindings = {
        filters: angular.copy(secondFilterIsActive)
      };
      controller = $componentController('govFilters', undefined, bindings);

      // Test
      controller.$onInit();

      // Assert
      expect(controller.filters[1].isActive).toBe(true);
      expect(controller.activeFilter).toEqual({ status: 'pending' });
    });

    it('should activate the first filter if none has been defined as active in the data', () => {

      // Setup
      let bindings = {
        filters: angular.copy(noFilterDefinedAsActive)
      };
      controller = $componentController('govFilters', undefined, bindings);

      // Test
      controller.$onInit();

      // Assert
      expect(controller.filters[0].isActive).toBe(true);
      expect(controller.activeFilter).toEqual('');
    });

  });

  describe('selectFilter()', function() {

    let filters = [
      {
        name: 'All users',
        filter: '',
        isActive: 'true'
      },
      {
        name: 'Pending users',
        filter: {
          status: 'pending'
        }
      },
      {
        name: 'Administrators only',
        filter: {
          role: 'administrator'
        }
      }
    ];

    beforeEach(() => {
      let bindings = {
        filters: angular.copy(filters)
      };
      controller = $componentController('govFilters', undefined, bindings);
      controller.$onInit();
    });

    it('should activate the selected filter', () => {

      // Test
      controller.selectFilter(1);

      // Assert
      expect(controller.filters[1].isActive).toBe(true);
    });

    it('should deselect the previously active filter', () => {

      // Test
      controller.selectFilter(1);

      // Assert
      expect(controller.filters[0].isActive).toBe(false);
    });

    it('should update the currentFilterIndex', () => {

      // Test
      controller.selectFilter(2);

      // Assert
      expect(controller.currentFilterIndex).toBe(2);
    });

    it('should update the currently active filter', () => {

      // Test
      controller.selectFilter(2);

      // Assert
      expect(controller.activeFilter).toEqual({ role: 'administrator' });
    });

  });

  describe('changeFilter()', function() {

    let firstFilterActiveExample = [
      {
        name: 'All users',
        filter: '',
        isActive: 'true'
      },
      {
        name: 'Pending users',
        filter: {
          status: 'pending'
        }
      },
      {
        name: 'Administrators only',
        filter: {
          role: 'administrator'
        }
      }
    ];

    let lastFilterActiveExample = [
      {
        name: 'All users',
        filter: ''
      },
      {
        name: 'Pending users',
        filter: {
          status: 'pending'
        }
      },
      {
        name: 'Administrators only',
        filter: {
          role: 'administrator'
        },
        isActive: 'true'
      }
    ];

    it('keyboard right arrow should select the next filter', () => {

      // Setup
      let bindings = {
        filters: angular.copy(firstFilterActiveExample)
      };
      controller = $componentController('govFilters', undefined, bindings);
      controller.$onInit();
      expect(controller.currentFilterIndex).toBe(0);

      // Test
      // right arrow keydown event
      let $event = {
        keyCode: 39
      };
      controller.changeFilter($event);

      // Assert
      expect(controller.currentFilterIndex).toBe(1);
      expect(controller.activeFilter).toEqual({ status: 'pending' });
    });

    it('keyboard right arrow should not select the next filter if the last filter is already selected', () => {

      // Setup
      let bindings = {
        filters: angular.copy(lastFilterActiveExample)
      };
      controller = $componentController('govFilters', undefined, bindings);
      controller.$onInit();
      expect(controller.currentFilterIndex).toBe(2);

      // Test
      // right arrow keydown event
      let $event = {
        keyCode: 39
      };
      controller.changeFilter($event);

      // Assert
      // current filter index has not changed
      expect(controller.currentFilterIndex).toBe(2);
      // current active filter has not changed
      expect(controller.activeFilter).toEqual({ role: 'administrator' });
    });

    it('keyboard left arrow should select the previous filter', () => {

      // Setup
      let bindings = {
        filters: angular.copy(lastFilterActiveExample)
      };
      controller = $componentController('govFilters', undefined, bindings);
      controller.$onInit();
      expect(controller.currentFilterIndex).toBe(2);

      // Test
      // left arrow keydown event
      let $event = {
        keyCode: 37
      };
      controller.changeFilter($event);

      // Assert
      expect(controller.currentFilterIndex).toBe(1);
      expect(controller.activeFilter).toEqual({ status: 'pending' });
    });

    it('keyboard left arrow should not select the previous filter if the first filter is already selected', () => {

      // Setup
      let bindings = {
        filters: angular.copy(firstFilterActiveExample)
      };
      controller = $componentController('govFilters', undefined, bindings);
      controller.$onInit();
      expect(controller.currentFilterIndex).toBe(0);

      // Test
      // left arrow keydown event
      let $event = {
        keyCode: 37
      };
      controller.changeFilter($event);

      // Assert
      expect(controller.currentFilterIndex).toBe(0);
      expect(controller.activeFilter).toEqual('');
    });

  });

});
