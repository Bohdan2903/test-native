import { ActionType, INews, IUser, Nullable } from './model'

export const setNews = (payload: Nullable<Array<INews>>) => ({
  type: ActionType.SET_NEWS,
  payload,
})
export const setUser = (payload: Nullable<IUser>) => ({
  type: ActionType.SET_USER,
  payload,
})
