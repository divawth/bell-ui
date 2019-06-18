export var normalizeDate = function (date) {
    return date.setHours(0, 0, 0, 0);
};
export var offsetSecond = function (date, offset) {
    if (!Yox.is.numeric(date)) {
        date = date.getTime();
    }
    return new Date(date + offset * 1000);
};
export var offsetMinute = function (date, offset) {
    return offsetSecond(date, offset * 60);
};
export var offsetHour = function (date, offset) {
    return offsetMinute(date, offset * 60);
};
export var offsetDate = function (date, offset) {
    return offsetHour(date, offset * 24);
};
export var offsetMonth = function (date, offset) {
    if (!Yox.is.numeric(date)) {
        date = date.getTime();
    }
    date = new Date(date);
    date.setDate(1);
    date.setMonth(date.getMonth() + offset);
    return date;
};
export var firstDateInWeek = function (date, firstDay) {
    if (Yox.is.numeric(date)) {
        date = new Date(date);
    }
    var day = date.getDay();
    day = day >= firstDay ? day : (day + 7);
    return offsetDate(date, -1 * (day - firstDay));
};
export var lastDateInWeek = function (date, firstDay) {
    return offsetDate(firstDateInWeek(date, firstDay), 6);
};
export var firstDateInMonth = function (date) {
    if (Yox.is.numeric(date)) {
        date = new Date(date);
    }
    return offsetDate(date, 1 - date.getDate());
};
export var lastDateInMonth = function (date) {
    return offsetDate(firstDateInMonth(offsetMonth(date, 1)), -1);
};
export var isValidDate = function (date) {
    var time = date.getTime && date.getTime();
    if (!time) {
        time = date;
    }
    if (Yox.is.number(time)) {
        return ('' + time).length > 8;
    }
    return false;
};
export var parseDate = function (year, month, date) {
    var valid = false;
    if (Yox.is.numeric(year)
        && Yox.is.numeric(month)
        && Yox.is.numeric(date)) {
        valid = true;
    }
    else if (Yox.is.object(year)) {
        valid = true;
        date = year.date;
        month = year.month;
        year = year.year;
    }
    else if (Yox.is.string(year)) {
        valid = true;
        var parts = year.split(month || '-');
        year = parts[0];
        month = parts[1];
        date = parts[2];
    }
    if (valid) {
        year = '' + year;
        if (year.length === 4
            && month >= 1 && month <= 12
            && date >= 1 && date <= 31) {
            return new Date(year, month - 1, date);
        }
    }
};
export var simplifyDate = function (date) {
    if (!date || !isValidDate(date)) {
        return date;
    }
    date = new Date(date);
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        day: date.getDay()
    };
};
export var getOffsetTime = function (date) {
    if (!date) {
        return 0;
    }
    return date.getTime();
};
export var lpad = function (num, length) {
    if (num == undefined) {
        return '';
    }
    if (length == null) {
        length = 2;
    }
    var arr = new Array(length - ('' + num).length + 1);
    return arr.join('0') + num;
};
export var formatList = function (list) {
    var result = [];
    var arr = [];
    for (var i = 0; i < list.length; i++) {
        arr.push(list[i]);
        if (i % 7 == 6) {
            result.push(arr);
            arr = [];
        }
    }
    return result;
};
//# sourceMappingURL=util.js.map