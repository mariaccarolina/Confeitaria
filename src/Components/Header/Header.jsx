import React from "react";
import styled from "styled-components"

const  HeaderStyle = styled.header`
    background-color: #efc5d3;
`
const Img = styled.img`
    
`

function Header() {
    return (
        <HeaderStyle>
            <img src="https://marketplace.canva.com/EAFDxR4QEvY/2/0/1600w/canva-logotipo-confeitaria-bolos-rosa--N3_TL7iiFs.jpg" alt="" />
                <nav>
                    <ul>
                        <li>Inicio</li>
                        <li>Unidades</li>
                        <li>Cardápio</li>
                        <li>Cursos</li>
                    </ul>
                </nav>
        </HeaderStyle>
    )
}
export default Header