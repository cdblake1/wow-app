import professionSelected from '../actions/index.js';

export const professionSelected = (state = [], action) => {
    switch (action.type) {
        case 'PROFESSION_SELECTED':
            return Object.assign({}, state, {
                profession: [
                ]
            })

    }
}


