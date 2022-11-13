const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    SenderID:   {type: mongoose.Schema.Types.ObjectId,
                ref: 'Account',
                required: true,},
    ReceiverID:   {type: mongoose.Schema.Types.ObjectId,
                ref: 'Account',
                required: true,},
    Amount:    {type: Number,
                required: true}
    }, {
        timestamps: true,
    });

    const Transaction = mongoose.model('Transaction', TransactionSchema);

    module.exports = Transaction;