import * as types from './actionTypes';

export function selectProfession(profession) {
    return {
        type: types.PROFFESION_SELECTED,
        profession
    }
}

export function selectServer(server) {
    type: types.SERVER_SELECTED,
        server
}