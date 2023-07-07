import 'dotenv/config';
import express from 'express';
import * as records from './model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.



// CREATE controller ******************************************
app.post ('/records', (req,res) => { 
    records.createRecord(
        req.body.title, 
        req.body.artist, 
        req.body.year
        )
        .then(record => {
            res.status(201).json(record);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Record addition to the database failed.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/records', (req, res) => {
    records.retrieveRecords()
        .then(record => { 
            if (record !== null) {
                res.json(record);
            } else {
                res.status(404).json({ Error: 'document not found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'retrieve document failed.' });
        });
});


// RETRIEVE by ID controller
app.get('/records/:_id', (req, res) => {
    records.retrieveRecordsByID(req.params._id)
    .then(movie => { 
        if (movie !== null) {
            res.json(movie);
        } else {
            res.status(404).json({ Error: 'document not found' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'retrieve document failed' });
    });

});


// UPDATE controller ************************************
app.put('/records/:_id', (req, res) => {
    records.updateRecord(
        req.params._id, 
        req.body.title, 
        req.body.artist, 
        req.body.year
    )
    .then(record => {
        res.json(record);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Record update failed' });
    });
});


// DELETE Controller ******************************
app.delete('/records/:_id', (req, res) => {
    records.deleteRecordById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Record no longer exists' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'delete a record failed' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}...`);
});