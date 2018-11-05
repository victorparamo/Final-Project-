import axios from 'axios';
import { all, call, takeEvery, put } from 'redux-saga/effects'; 

function* rootSaga () {
    yield all([
      //watchGiftRequested(),
    ]);
  }
  
  export default rootSaga;