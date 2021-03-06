import React from 'react'
// Realizar o import do useParams
import { useParams } from 'react-router-dom'
// substituir os () pelas chaves pois será js e aplicar um return com esses valores
const Param = props => {
    // Criar uma const id onde esse id é o nome definido lá no context para adicionar o id do parâmetro
    const {id} = useParams()
    return (
        <div className="param">
            <h1>Componente Parâmetro</h1>
            <p>Valor: {id}</p>
        </div>
    )
}
export default Param

// Para adicionar este componente em outra rota aplicou um link em menu e duplicar a rota no Content