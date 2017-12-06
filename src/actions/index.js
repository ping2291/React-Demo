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
        let actionType = 'search_video';
        const params = {
            part: 'snippet',
            key: YOUTUBE_API_KEY,
            q: options.term,
            type: options.type ? options.type : 'video',
            maxResults: options.maxResults ? options.maxResults : 10,
            nextPageToken: options.nextPageToken ? options.nextPageToken : ''
        };

        if(options.nextPageToken){
            actionType = 'search_next_video';
            params.pageToken = options.nextPageToken;
        }

        axios.get('https://www.googleapis.com/youtube/v3/search', { params: params })
             .then( res => {
                 dispatch({
                     type: actionType,
                     payload: res
                 });
             });            
    }
};

export const loading = () => dispatch => dispatch({ type: 'query_loading', payload: true });

export const queryTerm = term => dispatch => dispatch({ type: 'query_term', payload: term });

export const playVideo = playVideo => dispatch => dispatch({ type: 'play_video', payload: playVideo });

export const closeModel = () => dispatch => dispatch({ type: 'close_model', payload: {} });