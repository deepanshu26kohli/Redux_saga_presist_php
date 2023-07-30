export function productData(data = [], action) {
    switch (action.type) {
        case 'SET_PRODUCT':
            return action.data
        default:
            return data
    }
}