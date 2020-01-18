function pow(x, n) {
    var i;
    var res = x;
    for (i = 1; i < n; ++i ) {
        x = (x * res);
    }
    return x;
}

var x = +prompt( 'Введите возводимое', '1' );
if (typeof(x) == 'number') {
    var isInteger = +prompt( 'Введите степень', '1' );
     if (typeof(isInteger) == 'number') {
        var n = isInteger; 
        } else if (n > 0) {
            parseInt(n);
            alert(pow(x, n));
    } else {
        alert( 'Введите ЦЕЛОЕ ПОЛОЖИТЕЛЬНОЕ ЧИСЛО!!!' ); }}
else {
    alert( 'Введите ЧИСЛО!!!' );
}
