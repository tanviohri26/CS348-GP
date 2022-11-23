import classes from './AccountCard.module.css'
import React from 'react'

export default function AccountCard({cardType, accountNo, balance, nextClick}) {
    return (
        <div className={classes.card}>
            <div className={classes.cardDetails}>
                <div className={classes.accountinfo}>
                    <h2>{cardType}</h2>
                    <p>{accountNo}</p>
                </div>

                <div className={classes.amount}>{balance}</div>
            </div>
            <div className={classes.cardCta}>
                <button onClick={nextClick}>Next</button>
            </div>
        </div>
    )
}
