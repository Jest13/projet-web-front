import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from "react-bootstrap/CardGroup";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function App() {
  const [latest, setLatest] = useState("")


  // connexion api 
  useEffect(() => {
    axios
    .get("https://corona.lmao.ninja/v3/covid-19/all")
    .then(res => {
    console.log(res.data);
    })
    .catch(err => {
     console.log(err);
    });
  }, []);

  return (
    <div>
      <CardGroup>
        <Card bg="warning">
          <Card.Body>
            <Card.Title>Cas</Card.Title>
            <Card.Text>
              test
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card bg="danger">
          <Card.Body>
            <Card.Title>Mort(s)</Card.Title>
            <Card.Text>
              0
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card bg="success">
          <Card.Body>
            <Card.Title>Case</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default App;
