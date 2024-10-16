//Importacion
import React from "react"
import PropTypes from "prop-types"
import Button from "../button/button"

//Funcionalidad
const Functions = ({onContentClear, onDelete}) => (
    <section className="functions">
        <Button type="button-long-txt" text="clear" clickHandler={onContentClear} />
        <Button text="r" clickHandler={onDelete} />
    </section>
)

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions