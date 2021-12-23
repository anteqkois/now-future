const notFound = (req, res, next) => {
    const err = new Error('404 api endpoint not found');
    err.status = 404;
    next(err);
};

const catchAsyncErrors = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch((err) => {
            next(err);
        });
    };
};

class ApiError extends Error {
    constructor(message, status) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
    }
}
const createApiError = (message, status) => {
    const err = new ApiError(message, status);
    throw err;
};

const catchErrors = (err, req, res, next) => {
    // return res.status(err.status || 500).send(err.message);
    return res.status(err.status || 500).json({ error: err.message });
    next();
};

const handleValidationErrors = (err) => {
    let errors = {};

    err.code === 11000 &&
        (() => {
            const { keyValue } = err;
            const name = Object.keys(keyValue)[0];
            keyValue['name'] = 'Już istnieje';
            errors = { ...keyValue };
        })();

    if (err.message.includes('validation failed') || err.message.includes('Validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

export { notFound, catchAsyncErrors, createApiError, catchErrors, handleValidationErrors };
