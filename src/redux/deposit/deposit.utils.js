export const makeCalculations = depositData => {
    const {depositAmount, monthCount, interestRate, withCapitalization} = depositData

    const {amountWithTax, depositHistory} = calculationsWithTax(depositAmount, monthCount, interestRate, withCapitalization)
    const amountTotal = Number(depositAmount) + Number(amountWithTax)
    const amountWithoutTax = calculationsWithoutTax(amountWithTax)
    const amountOfTax = Number((amountWithTax - amountWithoutTax).toFixed(2))
    console.log({amountWithTax, amountTotal, amountWithoutTax, amountOfTax, depositHistory})
    return {amountWithTax, amountTotal, amountWithoutTax, amountOfTax, depositHistory}
}

const calculationsWithTax = (depositAmount, monthCount, interestRate, withCapitalization) => {
    if(!withCapitalization) {
        return {amountWithTax: Number((((depositAmount * interestRate * (monthCount * 31 / 365))) / 100)).toFixed(2)}
    }
    let depositHistory = []
    let startDepositAmount = depositAmount
    for (let i = 0; i < monthCount; i++) {
        let currentMonthAmount = Number((depositAmount * interestRate * 31) / (365 * 100)).toFixed(2)
        depositHistory.push(depositAmount)
        depositAmount = (Number(currentMonthAmount) + Number(depositAmount)).toFixed(2)
    }
    depositHistory.push(depositAmount)
    return {amountWithTax: Number(depositAmount - startDepositAmount).toFixed(2), depositHistory}
}

const calculationsWithoutTax = (amountWithTax) => {
    return Number((amountWithTax - (amountWithTax * 0.13))).toFixed(2)
}

