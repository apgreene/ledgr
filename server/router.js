const express = require('express');
const router = express.Router();
const dbReqs = require('./controllers/controller');

router.get('/snapshots/:id', dbReqs.getActiveSnapshotsById);
router.get('/users', dbReqs.getAllUsers);
router.get('/user/:id', dbReqs.getUserById);
router.get('/details/:id', dbReqs.getActiveDetailsById);


router.post('/users', dbReqs.postUser);
router.post('/snapshots', dbReqs.postNewSnapshot);

router.put('/snapshots/:id', dbReqs.toggleSnapshotOff);


module.exports = router;