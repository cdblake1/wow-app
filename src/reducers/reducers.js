import * as types from '../actions/actionTypes';
import * as actions from '../actions/actions';

export const initialState = {
    server: '',
    profession: ''
}

export default function manageState(state = initialState, action) {
    switch (action.type) {
        case types.PROFFESION_SELECTED:

            return {
                server: state.server,
                profession: action.profession
            }

        case types.SERVER_SELECTED:

            return {
                server: action.server,
                profession: state.profession
            }
    }
}