function Usuario (props) {
    let maioridade = props.idade < 18 ? 'menor de idade' : 'maior de idade' 
    return (
        <>
            <h2>NOME: {props.nome}</h2>
            <h2>CIDADE: {props.cidade}</h2>
            <h2>IDADE: {props.idade} anos ({maioridade})</h2>
        </>
    )
}

export default Usuario