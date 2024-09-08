const express = require('express');
const Renter = require('C:/Users/manas/my-express-app/backend/models/Renter');
const router = express.Router();

router.post('/AddRenter', async (req,res)=> {
    try{
        const renterdata = req.body;
        const newrenter = new Renter(renterdata);
        await newrenter.save();
        res.status(201).json({message:'renter added successfully',renter : newrenter});
    }
    catch(error){
          res.status(400).json({message: 'error adding renter',error});
        }
    
});

module.exports = router;