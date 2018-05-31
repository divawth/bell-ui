export let normalizeDate = (date) => {
    return date.setHours(0, 0, 0, 0);
};

export let offsetSecond = (date, offset) => {
    if (!Yox.is.numeric(date)) {
        date = date.getTime();
    }
    return new Date(date + offset * 1000);
};

export let offsetMinute = (date, offset) => {
    return offsetSecond(date, offset * 60);
};

export let offsetHour = (date, offset) => {
    return offsetMinute(date, offset * 60);
};

export let offsetDate = (date, offset) => {
    return offsetHour(date, offset * 24);
};

export let offsetMonth = (date, offset) => {
    if (!Yox.is.numeric(date)) {
        date = date.getTime();
    }
    date = new Date(date);
    date.setDate(1);
    date.setMonth(date.getMonth() + offset);
    return date;
};

export let firstDateInWeek = (date, firstDay) => {
    if (Yox.is.numeric(date)) {
        date = new Date(date);
    }
    let day = date.getDay();
    day = day >= firstDay ? day : (day + 7);

    return offsetDate(date, -1 * (day - firstDay));
};

export let lastDateInWeek = (date, firstDay) => {
    return offsetDate(
        firstDateInWeek(date, firstDay),
        6
    );
};

export let firstDateInMonth = (date) => {
    if (Yox.is.numeric(date)) {
        date = new Date(date);
    }
    return offsetDate(
        date,
        1 - date.getDate()
    );
};

export let lastDateInMonth = (date) => {
    return offsetDate(
        firstDateInMonth(
            offsetMonth(date, 1)
        ),
        -1
    );
};

export let isValidDate = (date) => {
    let time = date.getTime();
    if (Yox.is.number(time)) {
        return ('' + time).length > 8;
    }
    return false;
};

export let parseDate = (year, month, date) => {
    let valid = false;

    if (Yox.is.numeric(year)
        && Yox.is.numeric(month)
        && Yox.is.numeric(date)
    ) {
        valid = true;
    }
    else if (arguments.length === 1) {
        if (Yox.is.object(year)) {
            valid = true;
            date = year.date;
            month = year.month;
            year = year.year;
        }
    }
    else if (arguments.length === 2) {
        if (Yox.is.string(year)) {
            valid = true;
            let parts = year.split(month || '-');
            year = parts[0];
            month = parts[1];
            date = parts[2];
        }
    }

    if (valid) {
        year = '' + year;
        if (year.length === 4
            && month >= 1 && month <= 12
            && date >= 1 && date <= 31
        ) {
            return new Date(year, month - 1, date);
        }
    }
};

export let simplifyDate = (date) => {
    if (!date) {
        return;
    }

    if (Yox.is.number(date)) {
        date = new Date(date);
    }

    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        day: date.getDay()
    };
};

export let getOffsetTime = (date) => {
    if (!date) {
        return 0;
    }
    return date.getTime();
};