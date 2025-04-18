import React from 'react';
import { Container } from '../ReuseComponents/Container';
import { Card } from './Card';
import { GetStart } from './GetStart';
import { IncidentHeader } from './IncidentHeader';
import { DescribeIncident } from './DescribeIncident';
import { IncidentForm } from './IncidentForm';
import { IncidentsMap } from './IncidentsMap';

export const Incidents = () => {
  return (
    <section>
      {/* <IncidentHeader /> */}
      <Container>
        {/* <Card /> */}
        {/* <GetStart  /> */}
        {/* <DescribeIncident /> */}
        {/* <IncidentForm /> */}
        <IncidentsMap />
      </Container>
    </section>
  );
};
