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
} from './constans'

export function useListPlansWithReducer() {
    const listPlans = useSelector((state) => state.listPlans)
    const dispatch = useDispatch()

    const getListPlans = () => {
        const listPlans = JSON.parse(localStorage.getItem('listPlans')) || []

        dispatch({
            type: GET_LIST_PLANS,
            listPlans: listPlans,
        })
    }

    const postListPlan = (plan) => {
        dispatch({
            type: POST_LIST_PLAN,
            plan: plan,
        })
    }

    const patchListPlan = (index) => {
        dispatch({
            type: PATCH_LIST_PLAN,
            index: index,
        })
    }

    const clearListPlans = () => {
        localStorage.setItem('listPlans', JSON.stringify([]))
        const listPlans = JSON.parse(localStorage.getItem('listPlans')) || []

        dispatch({
            type: CLEAR_LIST_PLANS,
            listPlans: listPlans,
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

        localStorage.setItem('listPlans', JSON.stringify(listPlans))
    }, [listPlans])

    return {
        listPlans,
        getListPlans,
        postListPlan,
        patchListPlan,
        clearListPlans,
    }
}
