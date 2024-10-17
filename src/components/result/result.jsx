//Importacion
import React from "react"
import PropTypes from "prop-types";

//Logica o funcionalidad
const Result = ({value}) => (
           <div className="result">
                {value}
           </div> 
    )

    //Validacion
    Result.propTypes = {
        value: PropTypes.string.isRequired
    }

    Result.defaultProps ={
        value: ""
    }

    //Exportacion
    export default Result