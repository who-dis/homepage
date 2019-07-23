import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 812px) {
    flex-direction: column;
  }
`;

const Option = styled.div`
  background-color: white;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
  color #444;
  min-height: 400px;
  width: 320px;
  margin-left: 1rem;
  margin-right: 1rem;
  transform: ${props => (props.suggested ? 'scale(1.2)' : '')};
  text-align: center;
  display: flex;
  flex-direction: column;
  h1 {
    color #555;
    font-size: 1.5rem;
    border-bottom: 1px solid #eee;
    padding: 1.5rem 0;
  }
  @media (max-width: 812px) {
    width: 80vw;
    margin-top: 2rem;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  p {
    margin-top: 2rem;
    font-size: 0.75rem;
    opacity: 0.7;
  }
  ul {
    margin: 0 auto;
  }
  li {
    display: flex;
    align-items: center;
    line-height: 1.25;
    span {
      margin-left: 0.5rem;
    }
    margin: 0.5rem 2rem;
    text-align: left;
    font-size: 0.75rem;
  }
`;

const CTA = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-top: 1px solid #eee;
  padding: 1.5rem 0;
  font-size: 0.75rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-left: 0.25rem;
`;

const Price = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  h2 {
    position: relative;
    font-weight: 400;
    font-size: 3rem;
    color: #555;
    span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 4px;
      font-size: 0.75rem;
      opacity: 0.7;
    }
  }
`;

const options = [
  {
    title: 'Basic website',
    subtitle: 'I want a simple website',
    price: 100,
    features: [
      'Modern website',
      'Domain name registration',
      'HTTPS with SSL encryption',
      'Great user experience',
    ]
  },
  {
    title: 'Advanced website',
    subtitle: 'I want to sell things on my website',
    price: 200,
    features: [
      'A basic website',
      'Online store',
      'Automated user management',
      'Custom email addresses',
    ]
  }
];

const renderFeature = feature => (
  <li>
    <StyledFontAwesomeIcon color="#6DB65B" icon={faCheckCircle} />
    <span>{feature}</span>
  </li>
);

const renderOption = ({ title, subtitle, price, features }) => {
  return (
    <Option>
      <h1>{title}</h1>
      <Info>
        <p>{subtitle}</p>
        <Price>
          <h2>${price} <span>/ year</span></h2>
        </Price>
        <ul>
          {features.map(renderFeature)}
        </ul>
      </Info>
      <CTA>
        CONTACT DEVELOPER <StyledFontAwesomeIcon icon={faArrowRight} />
      </CTA>
    </Option>
  )
}

const Pricing = () => {
  return (
    <Container>
      {options.map(renderOption)}
    </Container>
  );
};

export default Pricing;
