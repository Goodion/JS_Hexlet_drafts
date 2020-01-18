
/* let date = new Date(2012, 1, 20, 3, 12);
alert(date); */

/* const getWeekDay = (date) => {
    let day = date.getDay();
    switch (day) {
        case 0:
        return 'вс';
        break; 
        case 1:
        return 'пн';
        break;
        case 2:
        return 'вт';
        break;
        case 3:
        return 'ср';
        break;
        case 4:
        return 'чт';
        break;
        case 5:
        return 'пт';
        break;
        case 6:
        return 'сб';
        break;
    }
};

var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );      // Должно вывести 'вт' */

/* const getLocalDay = (date) => {
    let day = date.getDay();
    if (day == 0) {
        day = 7;
        return day;
    } return day;
}
 */

/* const getDateAgo = (date, days) => {
    let newDate = new Date(date);
    newDate.setDate(date.getDate() - days);
    return newDate.getDate();
};

var date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
alert( getDateAgo(date, 365) ); // 2, (2 января 2014) */

/* const getLastDayOfMonth = (year, month) => {
    let lastDay = new Date(year, month + 1);
    console.log(lastDay);
    lastDay.setDate(0);
    return lastDay.getDate();
}

alert(getLastDayOfMonth(2012, 1)); */


/* const getSecondsToday = () => {
    let currentTime = new Date();
    let baseTime = new Date();
    baseTime.setHours(00,00,00,00);
    return Math.floor((+currentTime - baseTime) / 1000);
}

alert(getSecondsToday()); */

/* const getSecondsToTomorrow = () => {
    let currentTime = new Date;
    let baseTime = new Date;
    baseTime.setDate(baseTime.getDate() + 1);
    baseTime.setHours(00,00,00,00);
    return Math.floor((+baseTime - currentTime) / 1000);
}

alert(getSecondsToTomorrow()); */


/* const formatDate = (date) => {
    
    let options = {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    };
    return date.toLocaleString("ru", options);
};

var d = new Date(2014, 0, 30); // 30 января 2014
alert( formatDate(d) ); // '30.01.14' */

/* const formatDate = (date) => {
    let currentDate = new Date();
    counter = +(currentDate - date);
    console.log(counter + ' ' + currentDate.getSeconds() + ' ' + date.getSeconds());
    if (counter < 1000) {
        return 'только что'; 
    } else if (counter >= 1000 && counter < 60000) {
        return Math.floor(counter / 1000) + ' сек. назад';        
    } else if (counter >= 60000 && counter < 3600000) {
        return  Math.floor(counter / 60000) + ' мин. назад';
    } else {
        let options = {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
        };
        return date.toLocaleString("ru", options) + ' ' + date.getHours() + ':' + date.getMinutes();
    }
};

alert( formatDate(new Date(new Date - 1)) ); // "только что"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм" */