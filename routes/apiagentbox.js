var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.query.action);
    switch (req.query.action) {

        case 'dial':
            res.send({ "status": "ok", "id_call": "12996.5326.1619634772.2453" });
            break;
        case 'dial2':
            res.send({ "status": "ok", "id_call": "12996.5326.1619634772.2453" });
            break;
        case 'chur':
            res.send({ "status": "ok", "id_call": "12996.5326.1619634772.2453" });
            break;
        default:
            res.send({ "status": "ok", "id_call": "12996.5326.1619634772.2453" });
            break;
    }
    // res.send({ query: req.query });
});
module.exports = router;