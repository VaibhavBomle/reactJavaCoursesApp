import React from 'react';
import { Button, Container } from 'reactstrap';

function Home() {
  return (
    <div className='text-center' style={{ backgroundColor: 'silver' }}>
      <h1 className='display-3'>Learing code is very easy...</h1>
      <Container>
      <h1>Learn Code ....!!</h1>
        <Button color='primary' size='3g' outline>
          Start Using
        </Button>
      </Container>
    </div>
  )
}

export default Home;
