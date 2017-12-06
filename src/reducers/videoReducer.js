
const defaultState = {
    playVideo: {},
    list: [],
    next: '',
    isLoading: false
}

export default function(state = defaultState, action){
    switch(action.type){
        case 'search_next_video':
            action.payload.data.items = [...state.list.data.items, ...action.payload.data.items];
        case 'search_video':
        case 'fetch_video':
            return {
                ...state,
                list: action.payload,
                next: action.payload.data.nextPageToken,
                isLoading: false
            };
        case 'play_video':
        case 'close_model':
            return {
                ...state,
                playVideo: action.payload
            };
        case 'query_loading':
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}