const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const agreementRoutes = express.Router();
const PORT = 4000;

let Agreement = require('./agreement.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/agreement', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

agreementRoutes.route('/').get(function(req, res) {
    Agreement.find(function(err, agreements) {
        if (err) {
            console.log(err);
        } else {
            res.json(agreements);
        }
    });
});

agreementRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Agreement.findById(id, function(err, agreement) {
        res.json(agreement);
    });
});

agreementRoutes.route('/update/:id').post(function(req, res) {
    Agreement.findById(req.params.id, function(err, agreement) {
        if (!agreement)
            res.status(404).send("data is not found");
        else
        agreement.agreement_firstname = req.body.agreement_firstname;
        agreement.agreement_lastname = req.body.agreement_lastname;
        agreement.agreement_type = req.body.agreement_type;
        agreement.agreement_url = req.body.agreement_url;
        agreement.agreement_completed = req.body.agreement_completed;

        agreement.save().then(agreement => {
                res.json('agreement updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

agreementRoutes.route('/add').post(function(req, res) {
    let agreement = new Agreement(req.body);
    agreement.save()
        .then(agreement => {
            res.status(200).json({'agreement': 'agreement added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new agreement failed');
        });
});

app.use('/agreements', agreementRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});