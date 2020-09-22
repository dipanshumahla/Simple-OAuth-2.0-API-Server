//Assumed a user from database

var user = {
    username: "naaniz97",
    name: "Naaniz",
    website: "www.naaniz.com",
    app: []
}


var getUserName = () => {
    return user.username;
}

var checkUserAuthorization = (currentUser, clientId) => {

    return new Promise(async (resolve, reject) => {

        if (currentUser != user.username) reject("User Error");
        await user.app.forEach(item => {
            if (item.clientid == clientId) resolve(true);
        })
        resolve(false);

    });
}

var authorizeClient = (clientId, authorizationCode) => {
    var client = {
        clientid: clientId,
        code: authorizationCode
    }
    user.app.push(client);
    console.log(user);
}


module.exports = { getUserName, checkUserAuthorization, authorizeClient };