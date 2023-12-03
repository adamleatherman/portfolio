// Models for the Travel Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Unable to successfully connect to database.' });
    } else  {
        console.log('Success: Connection to database established.');
    }
});

// SCHEMA: Define the collection's schema.
const travelSchema = mongoose.Schema({
	country:    { type: String, required: true },
	lengthOfStay:     { type: Number, required: true },
	dateArrived: { type: Date, required: true }
});

// Compile the model from the schema 
// by defining the collection name "placesTravelled".
const placesTravelled = mongoose.model('Places Travelled', travelSchema);


// CREATE model *****************************************
const createTravelLog = async (country, lengthOfStay, dateArrived) => {
    const newLog = new placesTravelled({ 
        country: country, 
        lengthOfStay: lengthOfStay, 
        dateArrived: dateArrived 
    });
    return newLog.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrievePlacesTravelled = async () => {
    const query = placesTravelled.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveLocationByID = async (_id) => {
    const query = placesTravelled.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteLocationById = async (_id) => {
    const result = await placesTravelled.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateLocation = async (_id, country, lengthOfStay, dateArrived) => {
    const result = await placesTravelled.replaceOne({_id: _id }, {
        country: country,
        lengthOfStay: lengthOfStay,
        dateArrived: dateArrived
    });
    return { 
        _id: _id, 
        country: country,
        lengthOfStay: lengthOfStay,
        dateArrived: dateArrived 
    }
}

// EXPORT the variables for use in the controller file.
export { createTravelLog, retrievePlacesTravelled, retrieveLocationByID, updateLocation, deleteLocationById }