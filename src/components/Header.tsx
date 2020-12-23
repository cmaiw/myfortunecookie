import styled from 'styled-components'

const Header = styled.header`
  display: flex; 
  flex-direction: row; 
  height: 90px;
  width: 100%;
  background-color: ${props => props.theme.quinary};
  color: ${props => props.theme.secondary};
  position: fixed;
  top: 0;
  left: 0;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0 0% 90% 20%;
  padding-left: 30px;
  @media only screen and (min-width: 768px) {
    height:120px;
  };
`
export default Header;
