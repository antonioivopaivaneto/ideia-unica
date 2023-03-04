import { useState } from "react";

function home(){
    return( 
    <div>
        <h1>Bem vindo</h1>
        <Contador />
    </div>
    )
        
}

function Contador(){
    const [contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default home;