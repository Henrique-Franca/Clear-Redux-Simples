import {
    NUM_MIN_ALTERADO,
    
} from './actionTypes'

//Action Creator
export function alterarNumeroMinimo(novoNumero){

    return{
        type:NUM_MIN_ALTERADO,
        payload: novoNumero
    }

}