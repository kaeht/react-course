/* eslint no-eval: 0 */
//importar
import React, {useState} from "react";
import Result from "./components/result/result";
import MathOperations from "./components/math-operations/mathOperations";
import Functions from "./components/functions/functions";
import Numbers from "./components/numbers/numbers";
import './App.css';



// Generar funcionalidad (funcion flecha)
const App  =  () => {
    // Array Destructuring
    // 1er posicion: estado (estado por defecto)  
    // 2da posicion: funcion modifica el estado por defecto)
    const [texto, funcionModTexto] = useState("")



    // Lo que hace la funcion
    console.log("Renderizacion de la App");
    return (
    <main className="react-calculator">
        <Result value={texto}/>
        <Numbers 
            onClickNumber={number =>{
                console.log("Number:", number)
                funcionModTexto(`${texto}${number}`)
            }}
        />
        <Functions 
            onContentClear={() => {
                console.log("Clear")
                funcionModTexto()
            }}
            onDelete={() => {
                if(texto.length > 0)
                {
                    const newTexto = texto.substring(0, texto.length - 1)
                    console.log("Delete:", newTexto)
                    funcionModTexto(newTexto)
                }
            }}
        />
        <MathOperations 
            onClickOperation={operation => {
                console.log("Operacion:", operation)
                funcionModTexto(`${texto}${operation}`)
            }} 
            onClickEqual={equal => {
                const evalTexto = eval(texto).toString()
                console.log("Equal:", evalTexto)
                funcionModTexto(evalTexto)
            }}
        />
    </main>
    )
}

//exportacion
export default App