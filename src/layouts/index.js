import React from 'react';
import styled from 'styled-components';
import '../styles/reset.css';
import Navbar from '../components/navbar';

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  min-height: 100vh;
  background-color: rgba(255, 182, 193);
  font-family: 'Open Sans', sans-serif;
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  width: 100%;
`;

const Layout = props => {
  return (
    <Container>
      <Navbar />
      <Main>{props.children}</Main>
    </Container>
  );
};

export default Layout;
