import React from 'react'

import Card from './Card'

export default props =>{

    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min

    return (
        <Card title='Sorteio de um Números' purple>
            
            <div >
                <span>
                    <span>Resultado:</span>
                    <strong>8</strong>
                </span>

            </div>
            
        </Card>
    )

}

