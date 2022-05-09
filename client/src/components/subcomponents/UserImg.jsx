import React from 'react';
import { Card, ListGroup, ListGroupItem, List, Badge, Button } from 'react-bootstrap';

const UserImg = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.cheatsheet.com/wp-content/uploads/2021/05/arnold-2.jpg" />
      <Card.Body>
        <Card.Title>The Arnold</Card.Title>
        <Card.Text>
          I'll be back
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Today's Points<Badge bg="secondary">9</Badge></ListGroupItem>
      </ListGroup>
      <Card.Body>
        <button className="follow">Follow</button>
        <button className="follow">Message</button>
      </Card.Body>
    </Card>
  );
};

export default UserImg;
