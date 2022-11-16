const router = require('express').Router();
let Account = require('../models/Account');
var mongoose = require('mongoose');

router.route('/').get((req, res) => {
    Account.where({userID: req.params.userId})
      .then(accounts => res.json(accounts))
      .catch(err => res.status(400).json('Error: ' + err));
    });

router.route('/add').post((req, res) => {
    const UserID = mongoose.Types.ObjectId.createFromHexString(req.body.UserID);
    const type = req.body.type;
    const balance = req.body.balance;
    
    const newAccount = new Account({UserID, balance, type});
  
    newAccount.save()
      .then(() => res.json('Account added!'))
      .catch(err => res.status(400).json('Error: ' + err));
    });

module.exports = router;