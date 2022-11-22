import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import {alterarNumeroMinimo} from './store/actions/numeros'

function Intervalo(props){

    const {min, max} = props
    props.alterarMinimo(1)

    return (
        <Card title='Intervalo de Números' red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} readOnly/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} readOnly/>
                </span>
            </div>
            
        </Card>
    )

}

function mapStateToProps(state){
    return{
        numeros: state.numeros
    }
}

function mapActionCreatorsToProps(dispatch){
    return{
        alterarMinimo(novoNumero) {
            // action creator -> action
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
          }
    }
}

export default connect(
    mapStateToProps, 
    mapActionCreatorsToProps
    )(Intervalo)