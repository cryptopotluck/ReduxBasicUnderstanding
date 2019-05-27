import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Colt 45', duration: '5:45'},
        {title: 'baby', duration: '3:15'},
        {title: 'American Pie', duration: '2:55'},
    ]
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});