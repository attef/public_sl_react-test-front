import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
// https://react-bootstrap.github.io

function App() {
  return <main className="main">
    <Jumbotron fluid>
      <Container fluid="md">
        <h1 className="mb-5">Keep calm, take a deep breath...</h1>
      </Container>
    </Jumbotron>
    <Container fluid="md">
      It's gonna be ok
    </Container>
  </main>
}

export default App;
