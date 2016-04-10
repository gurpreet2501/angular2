angular.module['angularDirectives'].directive('messages', function() {
  function MessagesCtrl() {
    var self = this;
    self.list = [
      {text: 'Hello, World!'}
    ];
    self.clear = function() {
      self.list = [];
    };
  }
  return {
    templateUrl: '', // Same as for controller
    scope: {}, // Isolate == Awesome
    controller: MessagesCtrl,
    controllerAs: 'messages',
    bindToController: true
  };
});