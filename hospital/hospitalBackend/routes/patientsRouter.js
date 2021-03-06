"use strict";
const express = require("express");
const router = express.Router();
const url = require("url");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require('path');

const patientsPath = "../data/patients.json";

router.use(bodyParser.json());
router.delete("/:patientId/treatments/:treatmentId", deleteTreatment);
router.get("/", getPatients);
router.get("/:patientId", getPatient);
router.patch("/:patientId", updatePatient);
router.post("/:patientId", addTreatment);




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

function deleteTreatment(req, resp) {
    let patients = readPatientsFromDB();
    let patient = patients.find(patient => patient.id === +req.params.patientId);
    const index = patients.indexOf(patient);

    const treatment = patient.treatments.find(t => t.id === +req.params.treatmentId);
    const indexTreatment = patient.treatments.indexOf(treatment);
    if(indexTreatment) {
        patient.treatments.splice(indexTreatment, 1);
        patients[index] = patient;
        writePatientTODB(patients);
        resp.status(200).send();
    }
    else {
        resp.status(404);
    }
}

function updatePatient(req, resp) {
    let patients = readPatientsFromDB();
    let patient = patients.find(patient => patient.id === +req.params.patientId);
    const index = patients.indexOf(patient);
    console.log(patient.treatments);
    patient = req.body;
    patient.department = undefined;
    patient.room = undefined;
    console.log(patient);
    patients[index] = patient;
    writePatientTODB(patients);
    if(patient) {
        resp.json(patient).status(200);
    }
    else {
        resp.status(404);
    }
}

function addTreatment(req, resp) {
    updatePatient(req, resp);
}

function readPatientsFromDB() {
    const json = fs.readFileSync(path.resolve(__dirname, patientsPath));
    return JSON.parse(json);
}


function writePatientTODB(patients) {
    fs.writeFileSync(path.resolve(__dirname, patientsPath), JSON.stringify(patients));
}


module.exports = router;
