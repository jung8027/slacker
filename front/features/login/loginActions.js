import $ from 'jquery'
import {GET_ALL_SONGS, SHOW_VIDEO} from './types'

export const postLogin = (songs) => (
  {
    type: GET_ALL_SONGS,
    songs
  }
)

export const getSongsAysnc = () => (dispatch) =>{
  return $.ajax({
    url: '/api/songs',
    dataType: 'json',
    type: 'get'
  })
  .done(songs => {
    dispatch(getAllSongs(songs));
  })
}

export const showVideo = (isVideo) => (
  {
    type: SHOW_VIDEO,
    isVideo
  }
)