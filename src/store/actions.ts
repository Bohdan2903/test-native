import { ActionType } from './model'

export const setNews = (payload: any) => ({
  type: ActionType.SET_NEWS,
  payload,
})
export const setUser = (payload: any) => ({
  type: ActionType.SET_USER,
  payload,
})
