import axios from 'axios';
import { YOUTUBE_API_KEY } from '../keys/key';

export const fetchVideo = options => {
    return async dispatch => {
        const params = {
            regionCode: options.regionCode ? options.regionCode : null,
            chart: 'mostPopular',
            part: 'snippet,contentDetails,statistics',
            key: YOUTUBE_API_KEY, 
            maxResults: options.maxResults ? options.maxResults : 10
        };
    
        const res = await axios.get('https://www.googleapis.com/youtube/v3/videos', { params: params });
        // video reducer
        dispatch({ type: 'fetch_video', payload: res });
    }
};

export const searchVideo = options => {
    return dispatch => {
        const params = {
            part: 'snippet',
            key: YOUTUBE_API_KEY,
            q: options.term,
            type: options.type ? options.type : 'video',
            maxResults: options.maxResults ? options.maxResults : 10
        };

        axios.get('https://www.googleapis.com/youtube/v3/search', { params: params })
             .then( res => {
                 dispatch({
                     type: 'search_video',
                     payload: res
                 });
             });            
    }
};

export const queryTerm = term => dispatch => dispatch({ type: 'query_term', payload: term });
