import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'
 
import Card from './Card'
import { alterarNumeroMinimo } from '../store/actions/numeros'
 
const Intervalo = props => {
    const {min, max} = props.numeros
    props.alterarMinimo(1000)
    return (
        <Card title="Intervalo de Numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" value={min}/>
                </span>
                <span>
                    <strong>Maximo</strong>
                    <input type="number" value={max}/>
                </span>
            </div>
        </Card>
    )
}
 
const mapStateToProps = state => {
    return {
        numeros: state.numeros
    }
}
 
function mapDispatchToProp(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProp)(Intervalo)