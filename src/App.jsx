/* eslint no-eval: 0 */
//importar
import React, {useState} from "react";
import words from "lodash.words";
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
    const [resultado, setResultado] = useState("")

    const items = words(texto, /[^-^+^*^/]+/g)

    // Premisa anterior a (?)
    // Si la premisa (esVerdadero) ? (resultadoPorVerdadero) : (resultadoPorFalso)
    const value = items.length > 0 ? items[items.length-1] : "0";
    // Lo que hace la constante
    console.log("Renderizacion de la App", value);

    return (

        <main className="react-calculator">
             {/* Display de operaciones */}
            <Result value={texto}/>
            {/* Display de resultado */}
            <Result  value={resultado || "0"}/>
            <Numbers 
                onClickNumber={number =>{
                    console.log("Click in number:", number)
                    funcionModTexto(`${texto}${number}`)
                }}
            />
            <Functions 
                onContentClear={() => {
                    console.log("Content Clear")
                    funcionModTexto('')
                    setResultado('')
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
                onClickEqual={() => {
                    try {
                      const evalTexto = eval(texto).toString();
                      console.log("Equal:", evalTexto);
                      setResultado(evalTexto); // Solo actualizamos el resultado
                    } catch (error) {
                      console.error("Error en la operación", error);
                      setResultado("Error");
                    }
                }}
            />
        </main>
    )
}

//exportacion
export default App