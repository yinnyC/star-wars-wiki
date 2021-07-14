import { fetchPeople } from '../utils'

export const SET_NUMBER = 'SET_NUMBER';
export const GET_PEOPLE = 'GET_PEOPLE';
export const SAVE_FAVORITE = 'SAVE_FAVORITE';

export const setNumber = (number) => ({
  type: SET_NUMBER,
  payload: {number}
})

export const saveFavorite = () => ({
  type: SAVE_FAVORITE,
  payload: {}
})

export const getPeople = (number) => (dispatch) => {
  fetchPeople(number).then((json) => {
    dispatch({
      type: GET_PEOPLE,
      payload: {json}
    })
  }).catch()
}