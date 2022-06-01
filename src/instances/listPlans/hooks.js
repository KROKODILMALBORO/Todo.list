import {useEffect} from 'react'

import {
    useSelector,
    useDispatch,
} from 'react-redux'

import {
    GET_LIST_PLANS,
    POST_LIST_PLAN,
    PATCH_LIST_PLAN,
    CLEAR_LIST_PLANS,
    LS_LIST_PLANS,
} from './constans'

export function useListPlansWithReducer() {
    const listPlans = useSelector((state) => state.listPlans)
    const dispatch = useDispatch()

    const getListPlans = () => {
        const listPlans = JSON.parse(localStorage.getItem(LS_LIST_PLANS)) || []

        dispatch({
            type: GET_LIST_PLANS,
            listPlans: listPlans,
        })
    }

    const postListPlan = (newPlan) => {
        dispatch({
            type: POST_LIST_PLAN,
            plan: newPlan,
        })
    }

    const patchListPlan = (index) => {
        dispatch({
            type: PATCH_LIST_PLAN,
            index: index,
        })
    }

    const clearListPlans = () => {
        localStorage.setItem(LS_LIST_PLANS, JSON.stringify([]))

        dispatch({
            type: CLEAR_LIST_PLANS,
        })
    }

    useEffect(() => {
        if (!listPlans.length) {
            return
        }

        const uncompletedListPlans = listPlans.filter((plan) => !plan.isCompleted)

        if (!uncompletedListPlans.length) {
            clearListPlans()
        }

        localStorage.setItem(LS_LIST_PLANS, JSON.stringify(listPlans))
    }, [listPlans])

    return {
        listPlans,
        getListPlans,
        postListPlan,
        patchListPlan,
    }
}
