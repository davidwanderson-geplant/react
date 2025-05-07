import { useState } from "react";

export default function Formulario() {
    const [nome, setNome] = useState(''); // useState retorna um array com o valor atual do estado e uma função para atualizá-lo
    const [idade, setIdade] = useState(''); // useState retorna um array com o valor atual do estado e uma função para atualizá-lo

    return (
        <div>
            <input 
                type="text" 
                placeholder="Nome" 
                onChange={(e) => setNome(e.target.value)}
            />
            <h2>Olá, {nome}</h2>
        </div>
    )
}