import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { LuFileEdit } from "react-icons/lu";
import { TiDelete } from "react-icons/ti";


function Travel({ country, onEdit, onDelete }) {
    return (
        <tr>
            <td>{country.country}</td>
            <td>{country.lengthOfStay}</td>
            <td>{country.dateArrived.slice(0, 10)}</td>

            {/* Update these icons to something that matches your style. */}
            <td><TiDelete onClick={() => onDelete(country._id)} /></td>
            <td><LuFileEdit onClick={() => onEdit(country)} /></td>
        </tr>
    );
}

export default Travel;