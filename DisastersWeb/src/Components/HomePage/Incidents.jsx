import React from 'react'
import { Container } from '../ReuseComponents/Container'
import { Card } from './Card'
import { GetStart } from './GetStart'
import { IncidentHeader } from './IncidentHeader'

export const Incidents = () => {
  return (
    <section>
        <IncidentHeader />
      <Container>
     {/* <Card /> */}
        {/* <GetStart  /> */}
      </Container>
    </section>
  )
}
