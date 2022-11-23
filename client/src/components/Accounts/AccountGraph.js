
import React from 'react'
import AccountCard from "../AccountDetail/AccountCard";

export default function AccountSummary() {
    return (
        <div>
            <h2>Graph goes here</h2>
            {/* Insert your graph ui here */}
            <AccountCard cardType={"Graph 1"} accountNo={123456789} balance={4500} />
            <AccountCard cardType={"Graph 2"} accountNo={123456789} balance={4500} />
        </div>
    )
}