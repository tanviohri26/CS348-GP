import React from 'react'
import AccountCard from "../AccountDetail/AccountCard";

export default function AccountSummary() {
    return (
        <div>
            <div className="justify">
                <h2>Debit</h2>
            </div>
            <AccountCard cardType={"Chequing"} accountNo={1234567890} balance={3456.00} nextClick="handleChequingClick" />
            <AccountCard cardType={"Saving"} accountNo={1234567890} balance={23890.03} />
            <h2>Total</h2>
            <div>
                <h2>Credit</h2>
            </div>
            <AccountCard cardType={"Credit"} accountNo={1234567890} balance={4500.00} />
        </div>
    )
}
