const express = require("express");
const app = express();
app.use(express.json())
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/darblockchain", {
    useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
    console.log("Connection with MongoDB was successful");
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " +PORT);
});

// routes
var employees = require("./model/employees");
const router = express.Router();
app.use("/", router);
router.route("/employees").get(function(req, res) {
    employees.find({}, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

router.post('/add', function(req, res, next) {
    new employees({
        age: req.body.age,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        occupation: req.body.occupation
    })
        .save(
            (err, newemployee) => {
                if (err)
                    console.log("error message : "
                        + err);
                else {
                    console.log(newemployee);
                    res.json(": Employee :" + newemployee._id + " added");
                }
            }
        );
})
router.get('/employee/:id', function (req, res) {
    //lire id de l'url
    let id = req.params.id;
    employees.findById({_id:id},(err,result)=>{

        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });

})




