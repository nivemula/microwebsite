import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 20px;
  background-color: #333;
  color: white;
`;

function Header() {
  return (
    <HeaderContainer>
      <h1>My Application</h1>
    </HeaderContainer>
  );
}

export default Header;