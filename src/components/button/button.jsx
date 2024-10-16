//Importacion
import React from "react"
import PropTypes from "prop-types"
import './button.css'

//Logica o funcionalidad
//type = button-long-text
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