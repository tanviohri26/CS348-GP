const router = require('express').Router();
let Transaction = require('../models/Transaction');
var mongoose = require('mongoose');

router.route('/').get((req, res) => {
    if (req.body.duration == 0) {
        Transaction.where(SenderID, req.body.UserID)
            .projection({createdAt: 1, Amount: 1})
            .then(transactions => res.json(transactions))
            .catch(err => res.status(400).json('Error: ' + err));
    } else {
        Transaction.where(SenderID, req.body.UserID)
            .where(createdAt).gte(Date.now() - req.body.duration)
            .projection({createdAt: 1, Amount: 1})
            .then(transactions => res.json(transactions))
            .catch(err => res.status(400).json('Error: ' + err));
    }});

router.route('/add').post((req, res) => {
    const SenderID = mongoose.Types.ObjectId.createFromHexString(req.body.SenderID);
    const ReceiverID = mongoose.Types.ObjectId.createFromHexString(req.body.ReceiverID);
    const Amount = req.body.amount;
    
    const newTransaction = new Transaction({SenderID, ReceiverID, Amount});
  
    newTransaction.save()
      .then(() => res.json('Transaction added!'))
      .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router;