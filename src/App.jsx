//importar
import React from "react";
import Result from "./components/result/result";
import Button from "./components/button/button";
import MathOperations from "./components/math-operations/mathOperations";
import './App.css';


// generar funcionalidad (funcion flecha)
const App  =  () => {

    const clickHandlerFunction = text => {
        console.log("Button.clickHandler", text)
    }
    //Lo que hace la funcion
    console.log("Renderizacion de la App");
    return (
    <main className="react-calculator">
        <Result />
        <div className="numbers">
                <Button text="1" clickHandler={clickHandlerFunction}/>
                <Button text="2" clickHandler={clickHandlerFunction}/>
                <Button text="3" clickHandler={clickHandlerFunction}/>
                <Button text="4" clickHandler={clickHandlerFunction}/>
                <Button text="5" clickHandler={clickHandlerFunction}/>
                <Button text="6" clickHandler={clickHandlerFunction}/>
                <Button text="7" clickHandler={clickHandlerFunction}/>
                <Button text="8" clickHandler={clickHandlerFunction}/>
                <Button text="9" clickHandler={clickHandlerFunction}/>
                <Button text="0" clickHandler={clickHandlerFunction}/>
        </div>
        <div className="functions">
             <button>
                clear
             </button>
             <button>
                r
             </button>
        </div>
        <MathOperations 
            onClickOperation={operation => 
                console.log("Operacion:", operation)
            } 
            onClickEqual={equal =>
                console.log("Equal", equal)
            }
        />
    </main>
    )
}

//exportacion
export default App