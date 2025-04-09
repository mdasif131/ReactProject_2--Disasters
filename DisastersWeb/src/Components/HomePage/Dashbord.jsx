import React, { useState } from 'react';
import { Card } from './Card';
import { Container } from '../ReuseComponents/Container';



import { ChatCypher } from './ChatCypher';


export const Dashbord = () => {
  return (
    <section className="">
      <Container className="relative">
        <Card />
        <ChatCypher />
      </Container>
    </section>
  );
};
