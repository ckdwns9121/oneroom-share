//매물 필터링 스토어

import {createAction, ActionType, createReducer} from 'typesafe-actions';

const SET_FILTERS  = 'filter/SET_FILTERS';

export const set_filters = createAction(SET_FILTERS)<Payload>();

const actions ={set_filters};

type Actions = ActionType<typeof actions>

interface Payload {
    type : string,
    value : boolean
}
interface State {
    oneroom: boolean,
    double : boolean,
    officetel : boolean,
}
const initState : State= {
    oneroom : true,
    double : true,
    officetel  : true,
};

const filters = createReducer<State, Actions>(initState, {
    [SET_FILTERS]: (state, action) =>
    {
        const {type,value} = action.payload;
        return {
            ...state,
            [type] : value,
        }
    }
});

export type RooteState = ReturnType<typeof filters>;
export default filters;