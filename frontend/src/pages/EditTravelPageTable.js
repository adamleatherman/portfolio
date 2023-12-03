import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditTravelPageTable = ({ countryToEdit }) => {
 
    const [country, setCountry]       = useState(countryToEdit.country);
    const [lengthOfStay, setLengthOfStay]         = useState(countryToEdit.lengthOfStay);
    const [dateArrived, setDateArrived] = useState(countryToEdit.dateArrived);
    
    const redirect = useNavigate();

    const editCountry = async () => {
        const response = await fetch(`/travel/${countryToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                country: country, 
                lengthOfStay: lengthOfStay, 
                dateArrived: dateArrived
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Country successfully edited in the travel log`);
        } else {
            const errMessage = await response.json();
            alert(`Error when attempting to edit country ${response.status}. ${errMessage.Error}`);
        }
        redirect("/travel");
    }

    return (
        <>
        <article>
            <h2>Edit an Entry</h2>
            <p>Edit the travel log by completing filling the inputs.</p>
            <table id="countries">
                <caption>Which country are you editing?</caption>
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
                            onClick={editCountry}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditTravelPageTable;