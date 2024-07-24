const express = require("express");
const router = express.Router();
const prisma = require("../config");


router.get("/project", async(req, res)=>{

    const skip = req.query.skip || 0;
    const limit = req.query.skip || 5;

    try{

        const projects = await prisma.project.findMany({
            skip,
            take:limit
        });

        return res.status(201).json(projects);

    }
    catch(error){
        console.log(error);
        return res.status(400).json({
            msg:"Internal server error."
        });
    }

});

module.exports = router;