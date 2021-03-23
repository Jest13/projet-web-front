import React, { useEffect, useState} from 'react';
import axios from "axios";
import { Map, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css";



const CovidMap = ({ countries }) => {
    const mapStyle = {
        fillColor: "white",
        weight: 1,
        color: "black",
        fillOpacity: 1,
    };

    const [latest, setLatest] = useState([]);

    // connexion API 
    useEffect(() => {
      axios
        .all([
           //donnees par pays 
          axios.get("https://corona.lmao.ninja/v3/covid-19/countries"),
     
          ])
          .then(responseArr => {
            setLatest(responseArr[0].data);
          })
          .catch(err => {
            console.log(err);
          });
     }, []);

   const onEachCountry = (country, layer)=> {
        
        const name = country.properties.ADMIN; //parametrage popup pays 
        layer.bindPopup(`${name} ${latest.cases}`); // possibilité de retourner la donnee name du pays mais pas la donnee cas
    }


    return (
        <Map style={{ height: "90vh" }} zoom={2} center={[20, 100]}>
            <GeoJSON
                style={mapStyle}
                data={countries}
                onEachFeature={onEachCountry} />
        </Map>
    );
};

export default CovidMap;