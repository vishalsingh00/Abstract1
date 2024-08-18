const express = require('express')
const connection = require("./db/conn");
const Cards = require('./models/cards');
const app = express()
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('bello')
});

// Create a new card
app.post("/createCards", (req, res) => {
    console.log(req.body);
    const { id, title, description } = req.body;

    // Basic validation
    if (!id || !title || !description) {
        return res.status(400).json({
            message: "Validation error: 'id , 'title' and 'description' are required",
            status: false,
        });
    }

    const card = new Cards(req.body);

    card.save()
        .then(savedCard => {
            res.status(201).json({
                message: "Card created successfully",
                data: savedCard,
                status: true,
            });
        })
        .catch(error => {
            console.error("Error creating card:", error);
            res.status(500).json({
                message: "Error creating card",
                error: error.message,
                status: false,
            });
        });
});

//GETTING ALL THE CARDS INFO
app.get("/getCards", (req, res) => {
    Cards.find()
      .then(cards => {
        res.status(200).json({
          status: "success",
          data: {
            cards,
          },
        });
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      });
  });


//retrieving 
app.get('/cards/:title', (req, res) => {
    const { title } = req.params;
  
    Cards.findOne({ title: title })
      .then(card => {
        if (card) {
          res.status(200).json({
            status: "success",
            data: {
              card,
            },
          });
        } else {
          res.status(404).json({ message: "Card not found" });
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      });
  });





  
  connection.then(() => {
    app.listen(5000, () => {
      console.log("Server running");
    });
  });