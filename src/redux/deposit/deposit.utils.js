export const makeCalculations = depositData => {
    const {depositAmount, monthCount, interestRate, withCapitalization} = depositData

    const amountWithTax = calculationsWithTax(depositAmount, monthCount, interestRate, withCapitalization)
    const amountTotal = Number(depositAmount) + Number(amountWithTax)
    const amountWithoutTax = calculationsWithoutTax(amountWithTax)
    const amountOfTax = Number((amountWithTax - amountWithoutTax).toFixed(2))
    return {amountWithTax, amountTotal, amountWithoutTax, amountOfTax}
}

const calculationsWithTax = (depositAmount, monthCount, interestRate, withCapitalization) => {
    if(!withCapitalization) {
        return Number((((depositAmount * interestRate * (monthCount * 31 / 365))) / 100)).toFixed(2)
    }
    let startDepositAmount = depositAmount
    for (let i = 0; i < monthCount; i++) {
        let currentMonthAmount = Number((depositAmount * monthCount * 31) / (365 * 100)).toFixed(2)
        depositAmount = (Number(currentMonthAmount) + Number(depositAmount)).toFixed(2)
    }
    return Number(depositAmount - startDepositAmount).toFixed(2)
}

const calculationsWithoutTax = (amountWithTax) => {
    return Number((amountWithTax - (amountWithTax * 0.13))).toFixed(2)
}

