import {combineReducers} from 'redux';
import map,{mapSaga} from './map';
import realties, {realtiesSaga} from './realties';
import loading from './loading';
import user from './user';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({map,user,realties,loading});

export function *rootSaga(){
    yield all([mapSaga(),realtiesSaga()]);
}
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>