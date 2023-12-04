import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TravelList from '../components/TravelList';
import { Link } from 'react-router-dom';
import { VscAdd } from "react-icons/vsc";

function TravelPage({ setCountry }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [countries, setCountries] = useState([]);

    // RETRIEVE the entire list of countries
    const loadCountries = async () => {
        const response = await fetch('/travel');
        const countries = await response.json();
        setCountries(countries);
    } 
    

    // UPDATE a single country
    const onEditCountry = async country => {
        setCountry(country);
        redirect("/update");
    }


    // DELETE a single country  
    const onDeleteCountry = async _id => {
        const response = await fetch(`/travel/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/travel');
            const countries = await getResponse.json();
            setCountries(countries);
        } else {
            console.error(`Unable to delete country from log = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the countries
    useEffect(() => {
        loadCountries();
    }, []);

    // DISPLAY the countries
    return (
        <>
            <h2>Travelogue</h2>
            <p>This React-driven travelogue table page seamlessly integrates with MongoDB through Mongoose and Express, offering an interactive platform for managing and displaying travel data, fostering a dynamic and efficient user experience for exploring and updating travel information.</p>
            <Link to="/create" id="create">Add Country <VscAdd /></Link>
            
            <TravelList
                countries={countries} 
                onEdit={onEditCountry} 
                onDelete={onDeleteCountry} 
            />
        </>
    );
}

export default TravelPage;