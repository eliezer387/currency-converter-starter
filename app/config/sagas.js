import { takeEvery, select, call, put } from 'redux-saga/effects';

import {
    SWAP_CURRENCY,
    CHANGE_BASE_CURRENCY,
    GET_INITIAL_CONVERSION,
    CONVERSION_RESULT,
    CONVERSION_ERROR,
} from
    '../actions/currencies';


const getLatestRate = currency => fetch(`http://api.fixer.io/latest?${currency}`);

/*eslint-disable */
const fetchInitialConversionRates = function* (action) {

    try {
        let currency = action.currency;
        if (currency === undefined) {
            currency = yield select(state => state.currencies.baseCurrency);
        }

        const response = yield call(getLatestRate, currency);
        const result = yield response.json();

        if (result.error) {
            yield put({ type: CONVERSION_ERROR, error: result.error })
        } else {
            yield put({ type: CONVERSION_RESULT, result })
        }
    } catch (error) {
        yield put({ type: CONVERSION_ERROR, error: error.message })
    }
};

const rootSaga = function* () {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchInitialConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchInitialConversionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchInitialConversionRates);
};
/* eslint-enable */

export default rootSaga;
