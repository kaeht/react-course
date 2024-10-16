//importar
import React from "react";
import Result from "./components/result/result";
import MathOperations from "./components/math-operations/mathOperations";
import Functions from "./components/functions/functions";
import Numbers from "./components/numbers/numbers";
import './App.css';



// generar funcionalidad (funcion flecha)
const App  =  () => {
    //Lo que hace la funcion
    console.log("Renderizacion de la App");
    return (
    <main className="react-calculator">
        <Result />
        <Numbers 
            onClickNumber={number =>
                console.log("Number:", number)
            }
        />
        <Functions 
            onContentClear={clear =>
                console.log("Clear:", clear)
            }
            onDelete={deleted =>
                console.log("Clear:", deleted)
            }
        />
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