import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const DashboardContainer = styled.div`
  padding: 40px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

function Dashboard() {
  return (
    <DashboardContainer>
        <Header/>
      <h1>Dashboard</h1>
      {/* Add more dashboard elements here */}
    </DashboardContainer>
  );
}

export default Dashboard;
