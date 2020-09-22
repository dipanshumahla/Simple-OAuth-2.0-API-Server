//Assuming all client details

var client = {
    name: "naaniz.com",
    callbackURL: "http://localhost:3000/authorized"
}

var getClientName = (clientID) => {
    return client.name;
}

var getClientInfo = (clientId) => {
    return client;
}

module.exports = { getClientName: getClientName, getClientInfo: getClientInfo }