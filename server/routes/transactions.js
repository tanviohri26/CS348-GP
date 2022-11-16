const router = require('express').Router();
let Transaction = require('../models/Transaction');
var mongoose = require('mongoose');

router.route('/').get((req, res) => {
    Transaction.where({SenderID: req.params.SenderID})
    .then(transactions => res.json(transactions))
    .catch(err => res.status(400).json('Error: ' + err));
    });

router.route('/add').post((req, res) => {
    const SenderID = mongoose.Types.ObjectId.createFromHexString(req.body.SenderID);
    const ReceiverID = mongoose.Types.ObjectId.createFromHexString(req.body.SenderID);
    const Amount = req.body.Amount;
    
    const newTransaction = new Transaction({SenderID, ReceiverID, Amount});
    
    newTransaction.save()
        .then(() => res.json('Transaction added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    });
    
    module.exports = router;
