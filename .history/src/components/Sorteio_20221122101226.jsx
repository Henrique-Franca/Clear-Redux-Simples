import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

function Sorteio(props){
    const {min, max} = props

    return (
        <Card title='Sorteio de um Números' purple>
            
            <div >
                <span>
                    <span>Resultado:</span>
                    <strong>{10}</strong>
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

export default connect(mapStateToProps)(Sorteio)

