const express = require('express');
const router = express.Router();
const Queen = require('../models/queen');
const Drone = require('../models/drone');

// GET /api/queens - Get all queen bees
router.get('/queens', (req, res) => {
  Queen.find({}, (err, queens) => {
    if (!err) {
      res.status(200).json(queens);
    } else {
      res.status(500).json(err);
    }
  })
});

// GET /api/queens/:id - Get one queen
router.get('/queens/:id', (req, res) => {
  Queen.findById(req.params.id).populate('drones').exec( (err, queen) => {
    if (!err) {
      res.status(200).json(queen);
    } else {
      res.status(500).json(err);
    }
  })
})

// POST /api/queens - Create one queen
router.post('/queens', (req, res) => {
  let queen = new Queen({
    name: req.body.name,
    royalJellyFlavor: req.body.royalJellyFlavor
  });
  queen.save((err, queen) => {
    res.status(201).json(queen);
  });
})

// PUT /api/queens/:id - Update one queen
router.put('/queens/:id', (req, res) => {
  Queen.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    royalJellyFlavor: req.body.royalJellyFlavor
  }, {
    new: true
  }, (err, queen) => {
    res.status(203).json(queen);
  });
});

// GET /api/queens/:qid/drones -  Get all drones associated with given queen
router.get('/queens/:qid/drones', (req, res) => {
  Queen.findById(req.params.qid).populate('drones').exec((err, queen) => {
    res.status(200).json(queen.drones);
  })
})

// GET /api/queens/:qid/drones/:did - Gets ONE drone associated with that queen
router.get('/queens/:qid/drones/:did', (req, res) => {
  Drone.findById(req.params.did, (err, drone) => {
    res.status(200).json(drone);
  });
});

// POST /api/queens/:qid/drones - Creates a new drone for that queen
router.post('/queens/:qid/drones', (req, res) => {
  Queen.findById(req.params.qid, (err, queen) => {
    let newDrone = new Drone({
      name: req.body.name,
      job: req.body.job
    });
    newDrone.save((err, drone) => {
      queen.drones.push(drone._id);
      queen.save((err, queen) => {
        res.status(200).json(queen);
      })
    })
  })
});

// DELETE /api/queens/:qid/drones/:did - Deletes one drone from one queen
router.delete('/queens/:qid/drones/:did', (req, res) => {
  // Find the queen in question...
  Queen.findById(req.params.qid, (err, queen) => {
    // Remove the drone id from the queen's drones array
    queen.drones.pull(req.params.did)
    queen.save(err => {
      if (err) res.json(err)
      Drone.deleteOne({_id: req.params.did}, err => {
        if (err) res.json(err)
        res.json(1);
      })
    })
  })
})

module.exports = router;
