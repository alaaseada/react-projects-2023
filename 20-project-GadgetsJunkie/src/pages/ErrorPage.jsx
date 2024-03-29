import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <Wrapper className='page-100'>
      <section>
        <h1>404</h1>
        <h3>Ohh, the page you requested is not found!!!!</h3>
        <Link to='/' className='btn'>
          Go back to Home page
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
