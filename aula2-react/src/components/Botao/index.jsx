import style from './style.module.css'
import { useState } from 'react'

export default function Botao() {
    const [fundoPreto, setFundoPreto] = useState(false)

    function handleClick() {
        // alert('Botão clicado!')
        setFundoPreto(!fundoPreto)
    }

    return (
        <>
        <div className={fundoPreto ? style.fundoPreto : style.fundoBranco}>
            <h1>PRINCIPAL</h1>
        </div>
        <button className={style.btn} onClick={handleClick}>Clique aqui</button>
        </>
    )
}