angular.module("todoApp", []).controller("RegController", function () {
  var regUsers = this;
  regUsers.user = [];

  regUsers.addUser = function () {
    regUsers.user.push({
      firstName: regUsers.firstName,
      lastName: regUsers.lastName,
      phoneNumber: regUsers.phoneNumber,
      email: regUsers.email,
      password: regUsers.password,
    });
    regUsers.firstName = "";
    regUsers.lastName = "";
    regUsers.phoneNumber = "";
    regUsers.email = "";
    regUsers.password = "";
  };
});
