function pow(x, n) {
    var i;
    var res = x;
    for (i = 1; i < n; ++i ) {
        x = (x * res);
    }
    return x;
}

var x = 5;
var n = 1;
alert(pow(x, n));
