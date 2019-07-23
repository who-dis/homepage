import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Title = styled.h1`
  font-weight: 300;
  font-size: 6rem;
  @media (max-width: 812px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.h1`
  font-weight: 300;
`;

const Logo = styled.header`
  text-align: center;
  position: relative;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CTA = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-top: 2rem;
  position: absolute;
  right: 0;
  padding: 0.75rem 1.5rem;
  border: 1px solid white;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  @media (max-width: 812px) {
    width: 100%;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-left: 0.25rem;
`;

const Index = () => {
  return (
    <Container>
      <Logo>
        <Title>WHODIS</Title>
        <Subtitle>Who made this website? It is amazing!</Subtitle>
        <CTA to="/pricing">
          Build me a website <StyledFontAwesomeIcon icon={faArrowRight} />
        </CTA>
      </Logo>
    </Container>
  );
};

export default Index;
