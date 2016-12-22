import types from './types'

export const getWorry = (date) => ({ type: types.GET_WORRY, date })
export const getWorrySuccess = (date, worry) => ({ type: types.GET_WORRY_SUCCESS, date, worry })
export const getWorryFailure = (date, worry) => ({ type: types.GET_WORRY_FAILURE, date, worry })

export const changeWorryFormDate = (date) => ({ type: types.CHANGE_WORRY_FORM_DATE, date })
export const changeWorryFormWorry = (worry) => ({ type: types.CHANGE_WORRY_FORM_WORRY, worry })
export const updateWorry = (date, worry) => ({ type: types.UPDATE_WORRY, date, worry })
export const updateWorrySuccess = (date, worry) => ({ type: types.UPDATE_WORRY_SUCCESS, date, worry })

export const requestAdmin = () => ({ type: types.REQUEST_ADMIN })
export const changePassword = password => ({ type: types.CHANGE_PASSWORD, password })
export const login = password => ({ type: types.LOGIN, password })
export const loginSuccess = () => ({ type: types.LOGIN_SUCCESS })
export const loginFailure = () => ({ type: types.LOGIN_FAILURE })
export const logout = () => ({ type: types.LOGOUT })
