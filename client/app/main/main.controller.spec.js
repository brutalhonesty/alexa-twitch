'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('alexaTwitchApp'));

  var MainCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should not actually test anything yet', function () {
    expect(4).toBe(4);
  });
});
