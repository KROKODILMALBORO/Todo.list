import {
    GET_LIST_PLANS,
    POST_LIST_PLAN,
    PATCH_LIST_PLAN,
    CLEAR_LIST_PLANS,
} from './constans'

const initialState = []

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case GET_LIST_PLANS: {
            return action.listPlans
        }

        case POST_LIST_PLAN: {
            return [
                ...state,
                action.plan,
            ]
        }

        case PATCH_LIST_PLAN: {
            const plan = state[action.index]
            const newPlan = {
                ...plan,
                isCompleted: !plan.isCompleted,
            }
            const newList = [...state]
            newList[action.index] = newPlan

            return newList
        }

        case CLEAR_LIST_PLANS: {
            return initialState
        }

        default: {
            return state
        }
    }
}
