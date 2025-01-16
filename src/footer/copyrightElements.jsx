import React from "react";


const footerStyle = {
fontSize : '10rem'
}
const date = new Date();

function copyRightElement(){
    return <h3  style={{footerStyle}}>Copyright &copy; {date.getFullYear()} </h3>
}
export default copyRightElement ;