import React from "react";
import styled from "styled-components"

const MainStyle = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`
const Img = styled.img`
    width: 90vw;
    height: 70vh;
`
function Main() {
    return (
        <MainStyle>
            <Img src="https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_640.jpg" alt="" />
        </MainStyle>
    )
}
export default Main