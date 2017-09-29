var mongoose = require('mongoose');
var appts = require('../controllers/appts.js');

module.exports = function(app){
    
    app.post('/appts', (req, res, next)=>{
        appts.new(req, res)
      });

    app.get('/listappts', function(req, res, next) {
        // console.log("****** Arrived at routes.js")  
        appts.getAll(req, res) 
    });
    
    app.delete('/appts/:id', function(req, res, next) {
        appts.destroy(req, res)
    });

    app.put('/appts/:id', function(req, res, next) {
        appts.update(req, res)
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}

