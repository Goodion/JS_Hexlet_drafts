
var num;



outer: for ( num = 2; num <= 100; num++) {
    
    for ( i = 2; i <= ( Math.floor(num / 2) ); i++ ) {
    if ( num % i == 0 ) continue outer;
    
}
alert ( num );
}