import { takeEvery, call, put, select, takeLatest } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    const tasks = yield select(selectTasks);
    console.log(tasks);
    const exampleTasks = yield call(getExampleTasks());
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  console.log(tasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  console.log("saga jest podłączona");
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
