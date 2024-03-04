import React from "react";
import styled from "styled-components"

const  HeaderStyle = styled.header`
    background-color: #efc5d3;
    display: flex;
    height: 20vh;
    align-items: center;
    justify-content: space-around;
`
const Img = styled.img`
    width: 15vw;
    height: 15vh;
`

const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 60vw;
    color: white;
    font-size: 1.3rem;
    list-style: none;
    text-shadow: 2px 1px 2px black;
    cursor: pointer;
`
function Header() {
    return (
        <HeaderStyle>
            <Img src="https://marketplace.canva.com/EAFDxR4QEvY/2/0/1600w/canva-logotipo-confeitaria-bolos-rosa--N3_TL7iiFs.jpg" alt="" />
                <nav>
                    <Ul>
                        <li>Inicio</li>
                        <li>Unidades</li>
                        <li>Cardápio</li>
                        <li>Cursos</li>
                    </Ul>
                </nav>
        </HeaderStyle>
    )
}
export default Header