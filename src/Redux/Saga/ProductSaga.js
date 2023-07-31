import {takeEvery , put } from 'redux-saga/effects'

function* getProducts(){
    let data = yield fetch('http://localhost/Products/index.php')
    data = yield data.json()
    yield put({type: 'SET_PRODUCT', data: data})
}


function* productSaga(){
    yield takeEvery('GET_PRODUCT',getProducts)
}

export default productSaga