// Controllers for the Travel Collection

import 'dotenv/config';
import express from 'express';
import * as locations from './travel-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/travel', (req,res) => { 
    locations.createTravelLog(
        req.body.country, 
        req.body.lengthOfStay, 
        req.body.dateArrived
        )
        .then(location => {
            console.log(`"${location.country}" was added to the travel log.`);
            res.status(201).json(location);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Invalid request to create entry. Double-check syntax and format of input.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/travel', (req, res) => {
    locations.retrievePlacesTravelled()
        .then(locations => { 
            if (locations !== null) {
                console.log(`All locations were retrieved from the travel log.`);
                res.json(locations);
            } else {
                res.status(404).json({ Error: 'The travel log is currently empty.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Cannot retrieve locations from travel log. Please try again.' });
        });
});


// RETRIEVE by ID controller
app.get('/travel/:_id', (req, res) => {
    locations.retrieveLocationByID(req.params._id)
    .then(location => { 
        if (location !== null) {
            console.log(`"${location.country}" was retrieved, based on its ID.`);
            res.json(location);
        } else {
            res.status(404).json({ Error: 'This ID does not exist in the travel log.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Cannot retrieve location from travel log. Please try again.' });
    });

});


// UPDATE controller ************************************
app.put('/travel/:_id', (req, res) => {
    locations.updateLocation(
        req.params._id, 
        req.body.country, 
        req.body.lengthOfStay, 
        req.body.dateArrived
    )
    .then(location => {
        console.log(`"${location.country}" was updated.`);
        res.json(location);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Invalid request to update entry. Double-check syntax and format of input.' });
    });
});


// DELETE Controller ******************************
app.delete('/travel/:_id', (req, res) => {
    locations.deleteLocationById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} location was deleted.`);
                res.status(200).send({ Success: 'Specified travel log deleted.' });
            } else {
                res.status(404).json({ Error: 'This ID does not exist in the travel log.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Invalid request to delete entry. Please try again.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});