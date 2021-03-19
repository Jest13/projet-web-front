import React, { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card';
import CardGroup from "react-bootstrap/CardGroup";
import CardColumns from "react-bootstrap/CardColumns";

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

    const countries = results.map((data, i) => {
      return (
<Card
key={i}
bg="light"
text="dark"
className="text-center"
style={{ margin: "10px"}}
>
<Card.Img variant="top" src={data.countryInfo.flag} />
<Card.Body>
  <Card.Title>{data.country}</Card.Title>
  <Card.Text>Cas : {data.cases}</Card.Text>
  <Card.Text>Mort(s) : {data.deaths}</Card.Text>
  <Card.Text>Gueris : {data.recovered}</Card.Text>
  <Card.Text>Cas aujourd'hui : {data.todayCases}</Card.Text>
  <Card.Text>Mort(s) aujourd'hui : {data.todayDeaths}</Card.Text>
  <Card.Text>Cas actif : {data.active}</Card.Text>
  <Card.Text>Cas critique : (hospitalisé/réanimation) {data.critical}</Card.Text>
  <Card.Text>Cas : {data.cases}</Card.Text>
</Card.Body>
</Card>
);
});


 
  
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

      <CardColumns>
      {countries}
      </CardColumns>
      
    </div>
  );
}

export default App;
