
const defaultState = {
    playVideo: {},
    list: [],
}

export default function(state = defaultState, action){
    console.log('video action >> ',action);
    switch(action.type){
        case 'search_video':
        case 'fetch_video':
            return {
                ...state,
                list: action.payload
            };
        case 'play_video':
        case 'close_model':
            return {
                ...state,
                playVideo: action.payload
            };
        default:
            return state;
    }
}