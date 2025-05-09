import { useState } from "react";

export default function Formulario() {
    const [nome, setNome] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [erro, setErro] = useState(''); 
    const [cadastro, setCadastro] = useState(false); 

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

    function handleFocus(e) {
        console.log('Campo de telefone focado!')
    }

    return (
        <div>
        {cadastro  ? (
            <>
            <form onSubmit={validarEmail} >
                <input 
                    type="text" 
                    placeholder="Nome" 
                    onChange={(e) => setNome(e.target.value)}
                    />
                <input 
                    type="text" 
                    placeholder="telefone" 
                    onFocus={handleFocus}
                    />
                <input 
                    type="text" 
                    placeholder="E-mail" 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                {erro && <p style={{color: 'red'}}>{erro}</p>}
                <button onClick={() => setCadastro(false)}>Cadastrar</button>
            </form>
            </>
        ) 
        : 
        (   
            <>
            <h1>Cadastro realizado com sucesso!</h1>
            <button onClick={() => setCadastro(true)}>Cadastrar</button>
            </>
        )}
        </div>

        

        // <form onSubmit={validarEmail} >
        //     <input 
        //         type="text" 
        //         placeholder="Nome" 
        //         onChange={(e) => setNome(e.target.value)}
        //     />
        //     <input 
        //         type="text" 
        //         placeholder="telefone" 
        //         onFocus={handleFocus}
        //     />
        //     <input 
        //         type="text" 
        //         placeholder="E-mail" 
        //         onChange={(e) => setEmail(e.target.value)}
        //     />
        //     {erro && <p style={{color: 'red'}}>{erro}</p>}
        //     <button type="submit">Enviar</button>

        // </form>
    )
}

// CONSTRUA UM FORMULÁRIO QUE RECEBA NOME COMPLETO, EMAIL, TELEFONE, CPF, SENHA E CONFIRMAÇÃO DE SENHA.

// O FORMULÁRIO DEVE VALIDAR SE O EMAIL É VÁLIDO, SE A SENHA E A CONFIRMAÇÃO SÃO IGUAIS E SE ELAS POSSUEM NO MÍNIMO 8 CARACTERES.

// CPF DEVE TER 11 DÍGITOS E O TELEFONE DEVE TER 10 DÍGITOS.

// SE TUDO ESTIVER CORRETO, DEVE SER EXIBIDO UM ALERT COM AS INFORMAÇÕES DO FORMULÁRIO. SE HOUVER ALGUM ERRO, DEVE SER EXIBIDA UMA MENSAGEM DE ERRO NA TELA.
