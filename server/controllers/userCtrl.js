var users = [{
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
}, {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
}, {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
}, {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
}];

module.exports = {
  login: function(req, res) {
    for (var i = 0; i < users.length; i++) {
      if (users[i].name === req.body.name && req.body.password === users[i].password) {
          req.session.currentUser = users[i];
          res.status(200).send({userFound: true});
          return;
        }
      }

      res.status(404).send({userFound: false});
    }
  }
