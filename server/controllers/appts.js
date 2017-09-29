var mongoose = require('mongoose');
var Appt = mongoose.model('Appt');

module.exports = {

    getAll: function (req, res) {
        // console.log(1, "arrived at appts.js")
        Appt.find({}, function (err, appts) {
            appts.sort(function(a, b) {
                var dateA = new Date(a.date), dateB = new Date(b.date);
                return dateA - dateB;
            });
            res.json(appts);
            
        })
    },


    new: function (req, res) {
        console.log("Here's what we got from the front end:", req.body);
        let newAppt = new Appt(req.body);
        // console.log(4, "Before we save...", newAppt)
        newAppt.save(function (err) {
            if (err) {
                console.log('something went wrong when creating new Appt');
                return res.json();

            }
            else {
                console.log(5, "Appt added to database:", newAppt)
                return res.json();
            }
        })
    },

    destroy: function (req, res, id) {
        console.log(1, "Removing appt...")
        Appt.findByIdAndRemove(req.params.id, function (err) {
            console.log(2)
            if (err) {
                console.log('something went wrong when deleting appt');
                res.json(err);

            }
            else {
                console.log(5, "Appt deleted from database:")
                Appt.find({}, function (err, appts) {
                    // console.log(2)
                    res.json(appts);
                    // console.log(3);
                })
            }
        })
    },

    update: function (req, res) {
        console.log(1, "Updating appt...")
        Appt.findById(req.params.id, function (err, appt) {
            if (err) {
                console.log('Could not find appt by id.');
                res.json(err);

            }
            else {
                console.log(2)
                appt.attribute= req.body.key;
                appt.save(function (err) {
                    if (err) {
                        console.log('Could not save updates to Appt');
                        return res.json();
        
                    }
                    else {
                        console.log(3, "Item updates successfully saved");
                        Appt.find({}, function (err, appts) {
                            res.json(appts);
                        })
                    }
                })                
            }
        })
    },

    // closing curly brace: don't paste over!
}

