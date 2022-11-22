import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

function Soma(props) =>{

    return (
        <Card title='Soma dos Números' blue>
            
            <div >
                <span>
                    <span>Resultado:</span>
                    <strong>{10}</strong>
                </span>

            </div>
            
        </Card>
    )

}

export default connect()