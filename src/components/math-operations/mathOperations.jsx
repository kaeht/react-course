//Importacion
import React from "react";
import PropTypes from "prop-types";
import Button from "../button/button";

//Funcionalidad
const MathOperations = ({onClickOperation, onClickEqual}) => (
            <section className="math-operations">
                <Button text="+" clickHandler={onClickOperation} />
                <Button text="-" clickHandler={onClickOperation} />
                <Button text="*" clickHandler={onClickOperation} />
                <Button text="/" clickHandler={onClickOperation} />
                <Button text="=" clickHandler={onClickEqual}></Button>
            </section>
    )



//Validacion
MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

//Exportacion
export default MathOperations


