import React from "react";
import '../stylesheets/contador.css'

function contador ({ numeroClicks }) {
    return (
        <div className="contador">
        {numeroClicks}
        </div>
    )
}

export default contador;