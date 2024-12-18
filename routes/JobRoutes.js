const Job = require('../models/JobModel');
const express = require('express');

const router = express.Router();


// post job
router.post('/create-job', async (req, res) => {
    try {
        const { title, description, company, location, salary } = req.body;
        const job = new Job({ title, description, company, location, salary });
        await job.save();
        res
            .status(201)
            .json(job);
    } catch (err) {
        res
            .status(500)
            .json({ error: 'Failed to create job' });
    }
});


// get all jobs
router.get('/getjobs', async (req, res) => {
    try {
        const jobs = await Job.find();
        res
            .status(200)
            .json(jobs);
    } catch (err) {
        res
            .status(500)
            .json({ error: 'Failed to fetch jobs' });
    }
});


// update job
router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });
        res
            .status(200)
            .json(updatedJob);
    } catch (err) {
        res
            .status(500)
            .json({ error: 'Failed to update job' });
    }
});


// delete job

router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Job.findByIdAndDelete(id);
        res
            .status(200)
            .json({ message: 'Job deleted successfully' });
    } catch (err) {
        res
            .status(500)
            .json({ error: 'Failed to delete job' });
    }
});


module.exports = router;