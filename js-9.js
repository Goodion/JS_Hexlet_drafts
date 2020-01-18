 

  function checkAge(age) {
      return (age > 18) ? true : confirm( '' )
  }

  function checkAge(age) {
      return (age > 18) || confirm( '' );

  }

  function min(a,b) {
      return (a <= b) ? alert(a) : alert(b);
  }