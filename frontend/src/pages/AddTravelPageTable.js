import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const AddTravelPageTable = () => {

    const [country, setCountry]       = useState('');
    const [lengthOfStay, setLengthOfStay]         = useState('');
    const [dateArrived, setDateArrived] = useState('');
    
    const redirect = useNavigate();

    const addCountry = async () => {
        const newCountry = { country, lengthOfStay, dateArrived };
        const response = await fetch('/travel', {
            method: 'post',
            body: JSON.stringify(newCountry),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Country successfully added to the travel log`);
        } else {
            alert(`Error when attempting to add to travel log = ${response.status}`);
        }
        redirect("/travel");
    };


    return (
        <>
        <article>
            <h2>Add a Country</h2>
            <p>Add to the travel log by filling the inputs.</p>
            
            <table id="countries">
                <caption>Which country are you adding?</caption>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Length of Stay</th>
                        <th>Date of Arrival</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="country">Country name</label>
                        <input
                            type="text"
                            placeholder="Name of the country"
                            value={country}
                            onChange={e => setCountry(e.target.value)} 
                            id="country" />
                    </td>

                    <td><label for="lengthOfStay">Length of stay in days</label>
                        <input
                            type="number"
                            value={lengthOfStay}
                            placeholder="Length of stay in days"
                            onChange={e => setLengthOfStay(e.target.value)} 
                            id="lengthOfStay" />
                    </td>

                    <td><label for="dateArrived">Date of arrival</label>
                        <input
                            type="date"
                            placeholder="Date of arrival"
                            value={dateArrived}
                            onChange={e => setDateArrived(e.target.value)} 
                            id="dateArrived" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={addCountry}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddTravelPageTable;