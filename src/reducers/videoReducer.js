
export default function(state = [], action){
    switch(action.type){
        case 'search_video':
        case 'fetch_video':
            return action.payload;
        default:
            return state;
    }
}