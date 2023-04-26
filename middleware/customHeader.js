const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key;
        if (apiKey === "m@zj770308hdftrl07") {
            console.log(apiKey);
            next();
        } else {
            res.status(403);
            res.send({error:`Error: INVALID_API_KEY`});
        }
    } catch (err) {
        res.status(403);
        res.send({error:`Error: ${err.message}`});
    }
}

module.exports = customHeader;