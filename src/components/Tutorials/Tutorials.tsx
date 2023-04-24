import { Container, Tabs, Table, Header } from '@cloudscape-design/components';
// import { useState } from 'react';
import Go from './Go/Go';

export default function Tutorials() {

  return (
    <Container
      header={
        <Header
          variant="h1"
        >
          Tutorials
        </Header>
      }
    >
      <Tabs
        tabs={[
          {
            label: 'Go',
            id: 'Go',
            content: (<Go/>),
          },
          {
            label: 'Java',
            id: 'Java',
            content: 'Content',
          },
          {
            label: 'JavaScript',
            id: 'JavaScript',
            content: 'Content',
          },
          {
            label: 'React',
            id: 'React',
            content: 'content',
          }
        ]}
      />
    </Container>
  )
}