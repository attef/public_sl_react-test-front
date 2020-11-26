import React, { useEffect, useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// https://react-bootstrap.github.io/components/cards/
import Card from "react-bootstrap/Card"

// https://react-bootstrap.github.io/components/listgroup/
import ListGroup from "react-bootstrap/ListGroup"

// https://react-bootstrap.github.io/components/buttons/
import Button from "react-bootstrap/Button";
interface Album {
  id: number
  title: string
  userId: number
}
interface User {
  id: number
  name: string
  username: string
}
function App() {
  const [albums, setAlbums] = useState<Album[]>([])
  const [users, setUsers] = useState<User[]>([])
  const loadAlbums = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((json) => setAlbums(json))
  }
  const loadUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }
  useEffect(() => {
    loadUsers()
    loadAlbums()
  }, [])

  return <main className="main">
    <Jumbotron fluid>
      <Container fluid="md">
        <h1 className="mb-5">Hello world</h1>
        <Button>charger les albums</Button>
      </Container>
    </Jumbotron>
    <Container fluid="md">
      <Row>
        <Col>
          {users.map(user => (
            <ListGroup key={user.id}>
              <ListGroup.Item><h2>{user.username}</h2></ListGroup.Item>
              { albums.filter(({ userId }) => userId === user.id ).map( album => (
                <ListGroup.Item key={album.id}>{album.title}</ListGroup.Item>
              ) ) }
            </ListGroup>
          ))}
        </Col>
      </Row>
    </Container>
  </main>
}

export default App;
