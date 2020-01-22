const userModel = require('../models').user;
module.exports = {
    registerUser(req, res) {
        console.log(req.body);
        var userobj = req.body;
        userModel.create(userobj).then(userRes => {
            if (userRes)
                res.send('user registered successfully');
            else
                res.send('user registration failed');
        })
            .catch(error => { console.log(error) });
    },
    findAll(req, res) {
        userModel.findAll().then(users => {
            if (users)
                res.send(users);
            else
                res.send('data empty');
        })
            .catch(error => { console.log(error) })
    }
}
