export const validateOnlyWholeNumbers = (input) => {
    const onlyWholePositiveNumbersRegex = /^((\d)+,?)*$/ // /^\d+$/

    const afterSplit = input.split(',')
    const afterTrim = afterSplit.map(el => el.trim())
    const afterRegex = afterTrim.filter(el => onlyWholePositiveNumbersRegex.test(el))

    return afterRegex
}

// export const validateOnlyWholeNumbersWithCommas = (lastInput,input) => {
//     const onlyWholePositiveNumbersWithCommasRegex = /^((\d)+,?)*$/

//     const afterSplit = input.split(',')
//     const afterTrim = afterSplit.map(el => el.trim())
//     const afterRegex = afterTrim.filter(el => onlyWholePositiveNumbersWithCommasRegex.test(el))
//     console.log(afterRegex.toString());

//     if (afterRegex.toString() === input)
//         return afterRegex
//     else return input
// }