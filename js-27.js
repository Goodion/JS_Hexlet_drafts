
function User(fullName) {
  this.fullName = fullName;

  Object.defineProperty(this, "firstName", {
    get: function() {
      let split = this.fullName.split(' ');
      return split[0];
    },

    set: function(value) {
      let split = this.fullName.split(' ');
      split[0] = value;
      this.fullName = split.join(' ');
    }
  });

  Object.defineProperty(this, "lastName", {
    get: function() {
      let split = this.fullName.split(' ');
      return split[1];
    },

    set: function(value) {
      let split = this.fullName.split(' ');
      split[1] = value;
      this.fullName = split.join(' ');
    }
  });
}

var vasya = new User("Василий Попкин");




// чтение firstName/lastName
alert( vasya.firstName ); // Василий
alert( vasya.lastName ); // Попкин

// запись в lastName
vasya.firstName = 'Петёк';
vasya.lastName = 'Сидоров';

alert( vasya.fullName ); // Василий Сидоров