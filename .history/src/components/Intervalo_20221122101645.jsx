import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

function Intervalo(props){

    const {min, max} = props


    return (
        <Card title='Intervalo de Números' red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={0} readOnly/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={10} readOnly/>
                </span>
            </div>
            
        </Card>
    )

}

function mapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Intervalo)