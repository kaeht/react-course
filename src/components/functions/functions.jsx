//Importacion
import React from "react"
import PropTypes from "prop-types"
import Button from "../button/button"

//Funcionalidad
const Functions = ({onContentClear, onDelete}) => (
    <section className="functions">
        <Button type="button-long-text" text="clear" clickHandler={onContentClear} />
        <Button text="r" clickHandler={onDelete} />
    </section>
)

//Validacion
Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

//Exportacion
export default Functions