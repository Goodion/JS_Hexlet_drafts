
for ( i = 2; i <= (5 - 1); i++ ) {
if ( 5 % i == 0 ) break;
{ alert (i) }
}










var num;



outer: for ( num = 2; num <= 20; num++) {
    
    for ( i = 2; i <= (num - 1); i++ ) {
    if ( num % i == 0 ) continue outer;
    
}
alert ( num );
}