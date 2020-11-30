const express = require('express');
const jobs = require('../modelos/jobs');
const router = express.Router();

const Jobs = require('../modelos/jobs');

router.get('/jobs', async (req,res) =>{
    const jobs = await Jobs.find();
    console.log("jobs",jobs);
    res.render("jobs",{
        jobs
    });
});

router.get("/addjob",(req,res) =>{
    console.log("vista agregar jobs");
    res.render("addjob");
});

router.post("/addjob",async (req,res) =>{
    const job = new Jobs(req.body);
    await job.save();
    res.redirect("/jobs");
});

router.get("/deletejob/:id", async (req,res) => {
    const {id} = req.params
    await Jobs.remove({_id:id});
    res.redirect("/jobs");
});

router.get("/updatejob/:id",async (req,res) => {
    const {id} = req.params;
    const job = await Jobs.findById(id);
    console.log(job);
    res.render("updateJob",{
        job
    });
});

router.post("/updatejob/:id",async (req,res) => {
    const {id} = req.params;
    await Jobs.update({_id:id},req.body);
    res.redirect("/jobs");
});

module.exports = router;