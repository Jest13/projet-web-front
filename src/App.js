import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from "react-bootstrap/CardGroup";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function App() {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);

  // connexion api 
  useEffect(() => {
    axios
    .all([
    //donnees general
    axios.get("https://corona.lmao.ninja/v3/covid-19/all"),
    //donnes par pays 
    axios.get("https://corona.lmao.ninja/v3/covid-19/countries")
    ])
    .then(responseArr => {
    setLatest(responseArr[0].data);
    setResults(responseArr[1].data);
    })
    .catch(err => {
     console.log(err);
    });
  }, []);
// initialisation du timer update des donnees 


    const date = new Date(parseInt(latest.updated)); 
    const lastUpdated = date.toString();
 
  
//tableau des donnees
  return (
    <div>
      <CardGroup>
        <Card bg="warning">
          <Card.Body>
            <Card.Title>Cas</Card.Title>
            <Card.Text>
             {latest.cases}
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Derniere mise à jour: {lastUpdated} </small>
          </Card.Footer>
        </Card>
        <Card bg="danger">
          <Card.Body>
            <Card.Title>Mort(s)</Card.Title>
            <Card.Text>
            {latest.deaths}
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Derniere mise à jour: {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card bg="success">
          <Card.Body>
            <Card.Title>Gueris</Card.Title>
            <Card.Text>
             {latest.recovered}
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Derniere mise à jour: {lastUpdated}</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card bg="warning">
          <Card.Body>
            <Card.Title>Cas aujourd'hui</Card.Title>
            <Card.Text>
            {latest.todayCases}
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Derniere mise à jour: {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card bg="danger">
          <Card.Body>
            <Card.Title>Mort(s) aujourd'hui</Card.Title>
            <Card.Text>
            {latest.todayDeaths}
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Derniere mise à jour: {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card bg="success">
          <Card.Body>
            <Card.Title>Gueris aujourd'hui</Card.Title>
            <Card.Text>
            {latest.todayRecovered}
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Derniere mise à jour: {lastUpdated}</small>
          </Card.Footer>
        </Card>
      </CardGroup>



      <CardGroup>
        <Card bg="warning">
          <Card.Body>
            <Card.Title>Cas toujours actif</Card.Title>
            <Card.Text>
            {latest.active}
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Derniere mise à jour: {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card bg="danger">
          <Card.Body>
            <Card.Title>Cas critique</Card.Title>
            <Card.Text>
            {latest.critical}
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Derniere mise à jour: {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card bg="success">
          <Card.Body>
            <Card.Title>Test effectué(s)</Card.Title>
            <Card.Text>
            {latest.tests}
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Derniere mise à jour: {lastUpdated}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default App;
