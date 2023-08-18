export enum ActionType {
  SET_NEWS = 'SET_NEWS',
  SET_USER = 'SET_USER',
}

export type Nullable<T> = T | null

export interface Action<T = any> {
  type: string
  payload: T
}

export interface IUser {
  id: string
}

export interface INews {
  name: string
  image?: string
  imagePath?: string
  date?: string
  id: string
  anons?: string
  text: string
}
