require('angular');
require('angular-mocks');

// include jquery for extra matchers in test environment
require('jquery');

var testContext = require.context('../src', true, /\.spec\.ts/);

/*
 * get all the files, for each file, call the context function
 * that will require the file and load it up here. Context will
 * loop and require those spec files here
 */
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(testContext);