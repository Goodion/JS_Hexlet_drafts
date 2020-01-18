var login = prompt( "Введите логин", "" );

if (login == "Админ") {
   
    var pass = prompt ( "Введите Пароль", "" );
   if (pass == "Чёрный Властелин") {
       alert( "Добро пожаловать!" );
   } else if (pass == null) {
    alert( "Вход отменён" );
    }    
    else {
    alert( 'Пароль неверен' );
   }
}


else if (login == null) {
    alert( "Вход отменён" );
}
else {
    alert( "Я Вас не знаю" );
}