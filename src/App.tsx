import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ContentWrapper from './components/ContentWrapper';
import CookieCard from './components/CookieCard';
import Footer from './components/Footer';
import Header from './components/Header';
import { GlobalStyle } from './utils/GlobalStyle'
import theme from './utils/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Logo from './components/Logo';

const GithubIcon = styled.img`
height: 30px;
width: auto;
margin-left: 10px;
margin-bottom: -5px;
@media only screen and (min-width: 768px) {
  height: 45px;
};
`

const Link = styled.a`
color: ${props => props.theme.quinary};
text-decoration: none;
&:hover{color: #fff7c7};
`

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
      <ContentWrapper>
      <Header><Logo src="./images/smoke.png" alt="logo-with-stars" children="myFortunecookie"/></Header>
      <Switch>
            <Route exact path="/">
      <CookieCard />
      </Route>
      </Switch>
      <Footer><Link href="https://github.com/cmaiw/myfortunecookie" target="blank">Please visit on GitHub: <GithubIcon src="./images/github-logo-face.png" /></Link></Footer>
      </ContentWrapper>
      </Router>
      </ThemeProvider> 
    </div>
  );
}

export default App;
