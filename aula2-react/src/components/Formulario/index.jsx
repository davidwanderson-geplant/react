import { useState } from "react";

export default function Formulario() {
    const [nome, setNome] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [erro, setErro] = useState(''); 

    function handleSubmit(e) {
        e.preventDefault(); // Evita o comportamento padrão do formulário (recarregar a página)
        alert(`Nome: ${nome} \nEmail: ${email}`);
    }

    function validarEmail(e) {
        e.preventDefault()
        if (email.includes('@')) {
            setErro('')
            alert(`Cadastrado com sucesso! \nNome: ${nome} \nEmail: ${email}`)
        }
        else {
            setErro('Email inválido!')
        }
    }

    return (
        <form onSubmit={validarEmail} >
            <input 
                type="text" 
                placeholder="Nome" 
                onChange={(e) => setNome(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="E-mail" 
                onChange={(e) => setEmail(e.target.value)}
            />
            {erro && <p style={{color: 'red'}}>{erro}</p>}
            <button type="submit">Enviar</button>

        </form>
    )
}