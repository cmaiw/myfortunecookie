import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
height: fit-content;
width: fit-Content;
justify-content: flex-start; 
align-items: center;
`

const LogoImage = styled.img`
position: fixed;
top: 30px;
left: 0px;
height: 70px;
width: auto;
@media only screen and (min-width: 300px) {
    top: 50px;
    left: 0px;
    height: 80px;
};
@media only screen and (min-width: 768px) {
    top: 50px;
    left: 0px;
    height: 120px
};
`

const LogoText = styled.h1`
font-size: 1rem;
background: transparent;
margin-left: 50px;
font-family: 'Texturina', serif;
@media only screen and (min-width: 300px) {
    margin-left: 60px;
    font-size: 1.25rem;
};
@media only screen and (min-width: 400px) {
    font-size: 1.25rem;
    margin-left: 70px;
};
@media only screen and (min-width: 768px) {
    font-size: 2.25rem;
    margin-left: 130px;
};
`
export interface LogoProps {
    children: string
    src: string
    alt: string
}

const Logo = ({children, src, alt}: LogoProps) => {
  return(
    <Wrapper>
      <LogoImage src={src} alt={alt}/>
        <LogoText>{children}</LogoText>
    </Wrapper>
  )
}

export default Logo