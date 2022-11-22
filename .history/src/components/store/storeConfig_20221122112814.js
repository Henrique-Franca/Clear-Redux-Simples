import {createStore,combineReducers} from 'redux'

const reducers = combineReducers({
    numeros: function(state, action){
        
        switch(action.typoe){
            case 'NUM_MIN_ALTERADO':
                return{
                    ...state,
                    min: action.payload
                }
            default:
                return {
                    min: 10,
                    max: 31
                }
        }

    },

    nomes: function(state, action){
        
        return[
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})


function storeConfig(){
    return createStore(reducers)
}

export default storeConfig
