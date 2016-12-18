import types from './types'

export const nextWorry = () => ({ type: types.NEXT_WORRY })
export const previousWorry = () => ({ type: types.PREVIOUS_WORRY })
export const changeWorryFormDate = (date) => ({ type: types.CHANGE_WORRY_FORM_DATE, date })
export const changeWorryFormWorry = (worry) => ({ type: types.CHANGE_WORRY_FORM_WORRY, worry })
export const updateWorry = () => ({ type: types.UPDATE_WORRY })
