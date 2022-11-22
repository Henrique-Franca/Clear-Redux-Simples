import React from 'react'
import { connect, Connect } from 'react-redux'

import Card from './Card'

export default props =>{

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

         