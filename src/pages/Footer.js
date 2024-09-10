import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 10px;
  background-color: #333;
  color: white;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© 2024 My Application. All Rights Reserved.</p>
    </FooterContainer>
  );
}

export default Footer;