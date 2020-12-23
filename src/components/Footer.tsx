import styled from 'styled-components'

const Footer = styled.footer`
  display: flex;  
  height: 90px;
  width: 100%;
  background-color: ${props => props.theme.quinary};
  color: ${props => props.theme.secondary};
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 90% 20% 0 0;
  padding-right: 20px;
  padding-bottom: 13px;
  @media only screen and (min-width: 768px) {
    height:120px;
    padding-bottom: 25px;
    padding-right: 25px;
  };
  @media only screen and (max-height: 400px) {
      background-color: transparent;
    };
`
export default Footer;
