import { put, takeEvery, all, delay, takeLatest, call } from 'redux-saga/effects'
import { LOADER_FINISH, LOADER_START } from './moduleLoader';
import { SET_MESSAGE } from './modulErrorMessage';
import { REQUESTED_TODOS, REQUESTED_TODOS_SUCCEEDED } from './modulTodos';
import { INPUT_CHANGED, QUERY, setQuery } from './modulSearch';
// const API_URL = 'https://jsonplaceholder.typicode.com/todos';
import API from '../utils/API'

const fetchTodos = async () => {
  try {
    let response = await API.get('/');
     const todos = response.data.filter((todo: FetchTodo) => {
      return todo.userId === 1 && todo.completed === false
    })
    return todos;
  } catch(error) {
    return error
  }
}

export function* handleLoadTodo() {
  yield put({ type: LOADER_START })
  try {
    const todos = yield call(fetchTodos);

    yield put({ type: REQUESTED_TODOS_SUCCEEDED, todos })

  } catch (error) {
    
    yield put({ type: SET_MESSAGE, error: 'Oops! Something went wrong... :('})
  }
  finally {
    yield put({ type: LOADER_FINISH })
  }
}

function* watchFetchTodos() {
  yield takeEvery(REQUESTED_TODOS, handleLoadTodo)
}

function* setQueryAsync({ query }: setQuery) {
  // debounce by 300ms
  yield delay(300)
  yield put({ type: QUERY, query })
}

function* watchSearchInput() {
  // will cancel current running handleInput task
  yield takeLatest(INPUT_CHANGED, setQueryAsync);
}

export default function* rootSaga() {
  yield all([
    watchFetchTodos(),
    watchSearchInput(),
  ])
}