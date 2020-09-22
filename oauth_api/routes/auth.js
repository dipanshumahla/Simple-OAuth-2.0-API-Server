var express = require('express');
var router = express.Router();
var user = require('../helpers/user.js');
var clients = require('../helpers/clients.js');


router.get('/', (req, res) => {

    var requestClient = req.query.clientid;
    var client = clients.getClientName(requestClient);

    if (requestClient == '' || requestClient == null || client == null) {
        res.send("Bad Request");
        return;
    }

    var currentUser = user.getUserName();

    user.checkUserAuthorization(currentUser, client).then(status => {

        var data = { currentUser: currentUser, client: client }
        if (status) {
            res.render('redirect', data);
            return;
        } else {
            res.render('auth', data);
        }
    }).catch(r => {
        console.log("rejected");
        res.send('Bad Request');
    });

});

router.post('/:clientid/:response/:type', (req, res) => {
    var { clientid, response } = req.params;
    var username = user.getUserName();

    if (clientid == null, clientid == '') {
        res.send("Bad Request");
        return;
    }

    var clientResponse = {}
    var clientInfo = clients.getClientInfo(clientid);

    if (response == 'No') {
        clientResponse.status = false;
        clientResponse.message = "User didn't authorized!";
        req.body = clientResponse;
        res.redirect(307, clientInfo.callbackURL);
        return;
    }
    if (req.params.type == 'auto') {
        var authorizationCode = Math.random().toString(36).substring(2);
        user.authorizeClient(clientid, authorizationCode);
        clientResponse.authorizationCode = authorizationCode;
    }

    clientResponse.status = true;
    clientResponse.user = {
        username: username
    }

    req.body = clientResponse;
    console.log(req.body);
    res.redirect(307, clientInfo.callbackURL);

});


module.exports = router