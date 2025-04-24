import React from 'react';
import { Card, Row, Col } from 'antd';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  height: 100%;
`;

const ChartTitle = styled.h3`
  color: white;
  margin-bottom: 16px;
`;

const Charts: React.FC = () => {
  const contentData = [
    { name: 'Jan', blogs: 40, emails: 30, scripts: 20, social: 50 },
    { name: 'Feb', blogs: 45, emails: 35, scripts: 25, social: 55 },
    { name: 'Mar', blogs: 50, emails: 40, scripts: 30, social: 60 },
    { name: 'Apr', blogs: 55, emails: 45, scripts: 35, social: 65 },
    { name: 'May', blogs: 60, emails: 50, scripts: 40, social: 70 },
  ];

  const engagementData = [
    { name: 'Jan', engagement: 4000, seo: 2400 },
    { name: 'Feb', engagement: 4500, seo: 2800 },
    { name: 'Mar', engagement: 5000, seo: 3200 },
    { name: 'Apr', engagement: 5500, seo: 3600 },
    { name: 'May', engagement: 6000, seo: 4000 },
  ];

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={12}>
        <StyledCard>
          <ChartTitle>Monthly Content Production</ChartTitle>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={contentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
              <XAxis dataKey="name" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Legend />
              <Bar dataKey="blogs" fill="#9d4edd" />
              <Bar dataKey="emails" fill="#c77dff" />
              <Bar dataKey="scripts" fill="#ff9e00" />
              <Bar dataKey="social" fill="#ddff00" />
            </BarChart>
          </ResponsiveContainer>
        </StyledCard>
      </Col>
      <Col xs={24} md={12}>
        <StyledCard>
          <ChartTitle>Content Performance</ChartTitle>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
              <XAxis dataKey="name" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="engagement" stroke="#9d4edd" />
              <Line type="monotone" dataKey="seo" stroke="#ff9e00" />
            </LineChart>
          </ResponsiveContainer>
        </StyledCard>
      </Col>
    </Row>
  );
};

export default Charts; 