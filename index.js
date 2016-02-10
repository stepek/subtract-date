/**
 * Return subtract of date elements.
 * @param {Date | string} a
 * @param {Date | string} b
 * @returns {number} - time im ms.
 */
function subtractDate(a, b) {
    if (typeof a === 'string') {
        a = new Date(a);
    }
    if (typeof b === 'string') {
        b = new Date(b);
    }
    return a - b;
}

/**
 * Format subtract in ms to string like 1day 2 hours 1 minute 4 seconds.
 *
 * @example template
 * DD - days,
 * dd - only counter of days,
 * HH - hours,
 * MM - minutes,
 * SS - seconds,
 * MS - milliseconds
 *
 * @param {number} subtract - time in milliseconds.
 * @param {string} template
 * @returns {string}
 */
function formatSubtract(subtract, template) {
    var milliseconds = subtract % 1000;
    subtract = Math.round(subtract / 1000);
    var seconds = subtract % 60;
    subtract = Math.round(subtract / 60);
    var minutes = subtract % 60;
    subtract = Math.round(subtract / 60);
    var hours = subtract % 24;
    subtract = Math.round(subtract / 24);
    var days = subtract;

    var result = 'DD HH MM SS MS';
    if (template !== undefined || typeof template === 'string') {
        result = template;
    }

    if (days >= 0) {
        result = result.replace('dd', days.toString());
        if (days === 1) {
            result = result.replace('DD', days + ' day');
        } else {
            result = result.replace('DD', days + ' days');
        }
    }

    if (hours >= 0) {
        result = result.replace('hh', hours.toString());
        if (hours === 1) {
            result = result.replace('HH', hours + ' hour');
        } else {
            result = result.replace('HH', hours + ' hours');
        }
    }

    if (minutes >= 0) {
        result = result.replace('mm', minutes.toString());
        if (minutes === 1) {
            result = result.replace('MM', minutes + ' minute');
        } else {
            result = result.replace('MM', minutes + ' minutes');
        }
    }

    if (seconds >= 0) {
        result = result.replace('ss', seconds.toString());
        if (minutes === 1) {
            result = result.replace('SS', seconds + ' second');
        } else {
            result = result.replace('SS', seconds + ' seconds');
        }
    }

    if (milliseconds >= 0) {
        result = result.replace('ms', milliseconds.toString());
        if (minutes === 1) {
            result = result.replace('MS', milliseconds + ' millisecond');
        } else {
            result = result.replace('MS', milliseconds + ' milliseconds');
        }
    }
    return result.trim();
}

/**
 * Returns formatted subtract of 2 dates by template.
 * @param {Date | string} a
 * @param {Date | string} b
 * @param {string} template
 * @returns {string}
 */
function formattedDateSubtract(a, b, template) {
    var subtract = subtractDate(a, b);
    if (subtract > 0) {
        return formatSubtract(subtract, template);
    } else if (subtract === 0) {
        return '0'
    } else {
        throw new Error('2nd > 1st');
    }
}

module.exports.subtractDate = subtractDate;
module.exports.formatSubtract = formatSubtract;
module.exports.formattedDateSubtract = formattedDateSubtract;
