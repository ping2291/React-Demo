
export default function(state = [], action){
    switch(action.type){
        case 'query_term':
            return action.payload;
        default:
            return state;
    }
}