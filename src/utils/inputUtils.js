export const validateOnlyWholeNumbers = (input) => {
    const onlyWholePositiveNumbersRegex = /^((\d)+,?)*$/ // /^\d+$/

    const afterSplit = input.split(',')
    const afterTrim = afterSplit.map(el => el.trim())
    const afterRegex = afterTrim.filter(el => onlyWholePositiveNumbersRegex.test(el))

    return afterRegex
}