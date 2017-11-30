import axios from 'axios';

const API_KEY = 'AIzaSyAh9A_vp5iW5uGoA8e24R-9L9vRb3ULe0M';

export const fetchVideo = options => {
    return async dispatch => {
        const params = {
            regionCode: options.regionCode ? options.regionCode : null,
            chart: 'mostPopular',
            part: 'snippet,contentDetails,statistics',
            key: API_KEY, 
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
            key: API_KEY,
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
