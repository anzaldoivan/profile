import React from "react"
import '../App.css';

const doupler = {
    color: "white",
  };


function Footer(){

    return(
        <div className="footer">
            <p>Pagina realizada por Ivan Anzaldo. Contacto: <a style={doupler} href="mailto:anzaldoivan98@gmail.com">anzaldoivan98@gmail.com</a></p>
        </div>
    )

}
export default Footer