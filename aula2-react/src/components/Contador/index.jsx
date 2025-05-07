// ESTADOS EM REACT: 
// - Estado é uma informação que pode mudar ao longo do tempo e que afeta a renderização do componente


// Hooks são funções que permitem usar recursos do React sem precisar criar uma classe:
// - useState: hook que permite adicionar estado a componentes funcionais
// - useEffect: hook que permite realizar efeitos colaterais em componentes funcionais
import './Contador.css'
import { useState } from "react";

export default function Contador() { 

    const [contador, setContador] = useState(0); // useState retorna um array com o valor atual do estado e uma função para atualizá-lo

    return (
        <div>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <h2>Contador: {contador}</h2>
            <button onClick={() => { if (contador > 0) setContador(contador - 1)}}>Decrementar</button>
        </div>
    )

}
