if (a + b < 4) {
    result = 'Мало';
  } else {
    result = 'Много';
  }

// условие ? верное 1знач, неверно 2знач

redult = (a + b < 4) ? 'мало' : 'много';

var message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

var message = (login == 'Вася') ? 'Привет' : 
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'нет логина' : '';