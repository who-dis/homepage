import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Price = styled.div`
  background-color: white;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
  color #444;
  /* padding: 1rem; */
  height: 400px;
  width: 320px;
  margin: 2rem;
  transform: ${props => (props.suggested ? 'scale(1.2)' : '')};
  text-align: center;
  display: flex;
  flex-direction: column;
  h1 {
    color #555;
    font-size: 2rem;
    border-bottom: 1px solid #eee;
    padding: 1rem 0;
  }
`;

const Info = styled.div`
  flex: 1;
`;

const CTA = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  border-top: 1px solid #eee;
  padding: 1rem 0;
`;

const Pricing = () => {
  return (
    <Container>
      <Price suggested>
        <h1>Basic website</h1>
        <Info>
          <h2>$100</h2>
          <p>per year</p>
          <p>Build and host a basic website for me</p>
        </Info>
        <CTA>CONTACT DEVELOPER</CTA>
      </Price>
      <Price>
        <h1>Basic e-Commerce</h1>
        <h2>$200</h2>
        <p>per year</p>
        <p>Build and host a basic website where I can sell my goods</p>
      </Price>
    </Container>
  );
};

export default Pricing;
