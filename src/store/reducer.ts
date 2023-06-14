import { ActionType } from './model'

const initialState = {
  news: [
    {
      name: 'Google',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg',
      id: '0',
      anons: 'Google!',
      text: 'Google news is top in the words',
    },
    {
      name: 'Twitter',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg',
      id: '1',
      anons: 'Twitter!',
      text: 'Twitter news is top in the words',
    },
    {
      name: 'Viber',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg',
      id: '2',
      anons: 'Viber!',
      text: 'Viber news is top in the words',
    },
    {
      name: 'Facebook',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg',
      id: '3',
      anons: 'Facebook!',
      text: 'Facebook news is top in the words',
    },
  ],
  user: null,
}

export const newsReducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case ActionType.SET_NEWS:
      return {
        ...state,
        news: action.payload,
      }
    default:
      return state
  }
}

export const userReducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}
