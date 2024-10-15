//Importacion
import React from "react"
import PropTypes from "prop-types"

//Logica o funcionalidad
const Button = ({type, text, clickHandler}) =>
    {
        return (
            <button className={type} onClick={() => {
                clickHandler(text)
            }}>
                <span>{text}</span>
            </button>
        )
    }

    //Validacion
    Button.propTypes = {
        type: PropTypes.string,
        text: PropTypes.string.isRequired,
        clickHandler: PropTypes.func.isRequired
    }

    //Exportacion
    export default Button