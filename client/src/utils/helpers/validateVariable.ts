
const isEmptyString = (variable: string): boolean => {
    switch (variable) {
        case '':
            return true

        case undefined:
            return true

        case null:
            return true

        default:
            return false
    }

}

export {
    isEmptyString
}