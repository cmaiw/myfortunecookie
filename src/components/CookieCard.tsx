import React, { ChangeEvent } from 'react'
import styled, {keyframes} from 'styled-components'

const shake = keyframes` 
  0% { transform: translate(1px, 1px) rotate(0deg); }
  5% {transform:skew(-3deg,-3deg)}
  10% { transform: translate(-1px, -2px) rotate(-1deg);}
  15% {transform:skew(3deg,3deg)}
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  25% {transform:skew(-3deg,-3deg)}}
  30% { transform: translate(3px, 2px) rotate(0deg); }
  35% {transform:skew(3deg,3deg)}
  40% { transform: translate(1px, -1px) rotate(1deg); }
  45% {transform:skew(-3deg,-3deg)}
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  55% {transform:skew(3deg,3deg)}
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  65% {transform:skew(-3deg,-3deg)}
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  75% {transform:skew(3deg,3deg)}
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  85% {transform:skew(-3deg,-3deg)}
  90% { transform: translate(1px, 2px) rotate(0deg); }
  95% {transform:skew(3deg,3deg)}
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`
const changeColor = keyframes` 
  0%   {color: #0a0120;}
  25%  {color: #7e2a8f;}
  50%  {color: #f5238c;}
  75%  {color: #7e2a8f;}
  100% {color: #0a0120;}
`

const CookieWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    max-width: 750px;
    height: 90%;
    width: 90%;
    margin-bottom: 130px;
    @media only screen and (min-width: 350px) {
      margin-bottom: 170px
    };
    @media only screen and (max-height: 768px) {
      height: 50%;
      width: auto;
      position: fixed;
      top: 150px;
    };
    @media only screen and (min-width: 400px) {
      margin-bottom: 190px
    };
    @media only screen and (min-width: 768px) {
      margin-bottom: 280px
    };
  `
  
  const FortuneCookie = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: auto;
    margin: 0 auto;
    transition: opacity 1.5s ease-in-out;
    `

  const CookieBroken = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
  `
  
  const Advice = styled.div`
    position: fixed;
    left: 15px;
    right: 15px;
    bottom: 17px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5rem;
    background-color: hsl(0, 0%, 100%, 0.5);
    border: 2px solid hsl(0, 0%, 100%, 0.8);
    font-family: 'Texturina', serif;
    height: 87%;
    transition: opacity 1.5s ease-in-out;
    z-index: 110;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    @media only screen and (min-width: 768px) {
      font-size: 1.75rem;
    };
    @media only screen and (min-width: 1024px) {
      font-size: 2.5rem;
    };
  `
  const CookieBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    animation: ${shake} 2.5s; 
    animation-iteration-count:infinite;
    animation-direction: alternate-reverse;
  `

    const NextCookieBtn = styled.button`
    height: 32px;
    width: fit-conntent;
    font-family: 'Texturina', serif;
    font-size: 1.75rem;
    background: transparent;
    color: ${props => props.theme.primary};
    border:none;
    outline:none;
    margin-bottom: 40px;
    animation: ${changeColor} 2s ease-in infinite;
    transition: opacity 1.5s ease-in-out;
    @media only screen and (min-width: 768px) {
      font-size: 1.75rem;
      height: 40px;
    };
    @media only screen and (min-width: 1024px) {
      font-size: 2rem;
      height: 60px;
    };
    &:hover {color: hotpink;};
    `

const NextCookieBtnPlaceholder = styled.div`
height:44px;
width: 100%;
`
const AdvicePlaceholder = styled.div`
    position: fixed;
    left: 15px;
    right: 15px;
    bottom: 17px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 87%;
    transition: opacity 1.5s ease-in-out;
    z-index: -110;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    @media only screen and (min-width: 768px) {
      font-size: 1.75rem;
    };
    @media only screen and (min-width: 1024px) {
      font-size: 2.5rem;
    };
  `
export interface CookieCardProps { 
  advice: string
  isNotBroken: boolean
  onCrackCookie: () => void
  onChange: ChangeEvent
}

function CookieCard() {

    const [advice, setAdvice] = React.useState('')
    const [isNotBroken, setIsNotBroken] = React.useState(true)
    async function getAdvice() {
      const response = await fetch(`https://api.adviceslip.com/advice`)
      const data = await response.json()
      return data.slip.advice
    };
    React.useEffect(() => {
      
      async function refreshAdvice() {
        const nextAdvice = await getAdvice();
        setAdvice(nextAdvice);
      };
      if(isNotBroken) refreshAdvice();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [advice, isNotBroken]);

    const onCrackCookie  = () => {
      setIsNotBroken(false);
    };
    const handleNextCookie = () => {
      setIsNotBroken(true);
      if(window.navigator.userAgent.toLowerCase().includes('firefox')) window.location.reload();
    };

      return (
        <CookieWrapper>
            {isNotBroken 
            ? (<CookieBtn onClick={onCrackCookie}>
                 <FortuneCookie src="images/fortunecookie.png" alt="fortune-cookie"/>
                 </CookieBtn>) 
            : <CookieBroken src="images/fortunecookie_broken.png" alt="broken-cookie"/>}
                    {!isNotBroken 
                    ? <Advice>
                      {!isNotBroken 
                        ? (<NextCookieBtn onClick={handleNextCookie}>Try again?</NextCookieBtn>) 
                        : (<NextCookieBtnPlaceholder />)}{advice}</Advice> : <AdvicePlaceholder />
                      }
        </CookieWrapper>
      )
}
  
  export default CookieCard