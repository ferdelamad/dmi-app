import { put } from 'redux-saga/effects';
import { getItemsSuccess, getItemsError } from './actions';

export function* fetchApi() {
  try {
    const response = yield fetch('/api/getItems');
    const items = yield response.json();
    yield put(getItemsSuccess(items));
  } catch (error) {
    yield put(getItemsError());
  }
}
