import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

export const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-left: 5%;
`;

// Capturando os componentes de quem está usando a tag PageDefault
function PageDefault({ children }) {
  return (
    <React.Fragment>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </React.Fragment>
  )
}

export default PageDefault;

