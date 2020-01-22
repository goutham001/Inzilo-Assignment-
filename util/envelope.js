function wrapSuccess(data, message) {
    return {
        status: 200,
        data: data || undefined,
        message: message || 'No message provided.',
    };
}

function wrapUnauthorized(err, message) {
    if (typeof (err) === 'string') {
        return {
            status: 400,
            data: [],
            message: message || 'No message provided.',
        }
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return {
            status: 401,
            data:[],
            message: message || 'Invalid token.',
        }
    }

    // server error
    return {
        status: 500,
        message: message || 'Server error!!.',
    }
}

function wrapNoContent(message) {
    return {
        data: [],
        status: 204,
        message: message || 'No content.',
    };
}

// Resource already exist
function wrapConflict(message) {
    return {
        status: 409,
        message: message || 'Conflict.',
    };
}

// Resource Not Acceptable
function wrapNotAcceptable(message) {
    return {
        status: 406,
        message: message || 'Not Acceptable.',
    };
}

function wrapBadRequest(message) {
    return {
        status: 400,
        message: message || 'Bad request.',
    };
}

function wrapError(error, message) {
    return {
        status: 400,
        message: error ? error.message : message,
    };
}

function wrapNotFound(error, message) {
    return {
        status: 404,
        error: error || undefined,
        message: message || 'NOT FOUND',
    };
}

module.exports = { wrapSuccess, wrapNoContent, wrapConflict, wrapBadRequest, wrapError, wrapNotFound, wrapUnauthorized, wrapNotAcceptable };