const handleHttpErrors = (res, message = "Ocurrió un error", code = 403) => {
    res.status(code);
    res.send({error:message});
};

module.exports = {handleHttpErrors};