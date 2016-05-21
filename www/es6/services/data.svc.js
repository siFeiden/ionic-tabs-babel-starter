(function () {

  var data = angular.module('data', []);

  data.factory('data', function() {
    var data = {};

    return {
      all: function() {
        return data;
      }
    };
  });

})();
