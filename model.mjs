// Importing dependencies
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const vinylDb = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
vinylDb.once("open", (error) => {
    if(error){
        res.status(500).json({ error: '500: A server connection has not been established' });
    } else  {
        console.log("You've connected to the MongoDB vinyl record database.");
    }
});

// SCHEMA: Define the collection's schema.
const recordSchema = mongoose.Schema({
	title: { type: String, required: true },
	artist: { type: String, required: true },
	year: { type: Date, required: true, max: Date.now, default: Date.now }
});

// Compile the model from the schema.
const Record = mongoose.model('Record', recordSchema);


// CREATE model *****************************************
const createRecord = async (title, artist, year) => {
    const record = new record({ 
        title: title, 
        artist: artist, 
        year: year 
    });
    return record.save();
}


// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const retrieveRecord = async () => {
    const query = Record.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveRecordByID = async (_id) => {
    const query = Record.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteRecordById = async (_id) => {
    const result = await Record.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateRecord = async (_id, title, artist, year) => {
    const result = await Movie.replaceOne({_id: _id }, {
        title: title,
        artist: artist,
        year: year
    });
    return { 
        _id: _id, 
        title: title,
        artist: artist,
        year: year 
    }
}



// Export our variables for use in the controller file.
export { createRecord, retrieveRecord, retrieveRecordByID, updateRecord, deleteRecordById }