import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('/images/login-bg.png');
  background-size: cover;
  background-position: center;
`;

const LoginForm = styled.div`
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

function LoginPage() {
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic here (e.g., validate credentials)
        // If successful:
        navigate('/dashboard');
      };
  return (
    <LoginPageContainer>
      <LoginForm>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
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