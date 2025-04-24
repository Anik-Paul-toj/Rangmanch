import React from 'react';
import { Card, Row, Col, Statistic, Typography } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title } = Typography;

const StyledCard = styled(Card)`
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  height: 100%;
`;

const GrowthIndicator = styled.div`
  color: #52c41a;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const MetricCards: React.FC = () => {
  const metrics = [
    {
      title: 'Content Generated',
      value: '53,000',
      unit: 'words',
      growth: 30,
    },
    {
      title: 'Active Users',
      value: '3,200',
      unit: 'users',
      growth: 20,
    },
    {
      title: 'Audience Insights',
      value: '+1,200',
      unit: 'new segments',
      growth: 15,
    },
    {
      title: 'Content Performance',
      value: '13,200',
      unit: 'score',
      growth: 10,
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      {metrics.map((metric, index) => (
        <Col xs={24} sm={12} md={6} key={index}>
          <StyledCard>
            <Statistic
              title={<Title level={5} style={{ color: 'white', margin: 0 }}>{metric.title}</Title>}
              value={metric.value}
              suffix={metric.unit}
              valueStyle={{ color: '#9d4edd' }}
            />
            <GrowthIndicator>
              <ArrowUpOutlined />
              {metric.growth}%
            </GrowthIndicator>
          </StyledCard>
        </Col>
      ))}
    </Row>
  );
};

export default MetricCards; 