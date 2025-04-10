import React from 'react';
import { Container } from '../ReuseComponents/Container';
import { Card } from './Card';
import { GetStart } from './GetStart';
import { IncidentHeader } from './IncidentHeader';
import { DescribeIncident } from './DescribeIncident';

export const Incidents = () => {
  return (
    <section>
      <IncidentHeader />
      <Container>
        {/* <Card /> */}
        {/* <GetStart  /> */}
        <DescribeIncident />
      
      </Container>
    </section>
  );
};
