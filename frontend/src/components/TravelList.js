import React from 'react';
import Travel from './Travel';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function TravelList({ countries, onDelete, onEdit }) {
    return (
        <table id="countries">
            <caption>Countries Visited:</caption>
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Length of Stay</th>
                    <th>Date of Arrival</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {countries.map((country, i) => 
                    <Travel 
                        country={country} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default TravelList;
