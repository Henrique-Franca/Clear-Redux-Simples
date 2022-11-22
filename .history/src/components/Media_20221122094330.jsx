import React from 'react'
import { connect, Connect } from 'react-redux'

import Card from './Card'

const Media = props =>{
    console.log(props.min)
   // console.log(props.max)

  return (
    <Card title="Média dos Números" green>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{10}</strong>
        </span>
      </div>
    </Card>
    )

}

function mapStateToProps(state){
  return{
    min: state.numeros.min,
    max: state.numeros.max,

  }
}

export default connect(mapStateToProps)(Media)

