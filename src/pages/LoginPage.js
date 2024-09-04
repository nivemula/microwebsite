import React from 'react';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
  /* Add your background styling here */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('/path-to-your-image.png');
  background-size: cover;
  background-position: center;
`;

const LoginForm = styled.div`
  /* Add your form styling here */
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function LoginPage() {
  return (
    <LoginPageContainer>
      <LoginForm>
        <h2>Login</h2>
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </LoginForm>
    </LoginPageContainer>
  );
}

export default LoginPage;