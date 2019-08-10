"use strict";
const express = require("express");
const router = express.Router();
const url = require("url");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require('path');

const patientsPath = "../data/patients.json";

router.get("/", getPatients);
router.use("/:patientId", getPatient);
router.use(bodyParser.json());

function getPatients(req, resp) {
    resp.json(readPatientsFromDB()).status(200);
}

function getPatient(req, resp) {
    let patient = readPatientsFromDB();
    console.log(+req.params.patientId);
    patient = patient.find(patient => patient.id === +req.params.patientId);
    if(patient) {
        resp.json(patient).status(200);
    }
    else {
        resp.status(404);
    }
}

function readPatientsFromDB() {
    const json = fs.readFileSync(path.resolve(__dirname, patientsPath));
    return JSON.parse(json);
}

module.exports = router;
