import './Intervalo.css'
import React from 'react'

import Card from './Card'

export default props =>{

    const { min, max } = props;

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

