import User from "../models/User.js";

exports.createUser=async(req,res)=>{
    try{
        const user=await User.create(req.body);
        res.status(201).json(user);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

exports.getUser=async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({error:"User not found"});
        }
        res.status(201).json(user);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

