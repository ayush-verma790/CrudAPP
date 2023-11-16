const Employee=require("../models/Employee");
exports.createEmployeeData=async(req,res)=>{
    try{
        const { name, designation, department } = req.body;
        const response =await Employee.create({name, designation, department });
        res.status(200)(
            {
                success:true,
                data:response,
                message:"Entry created successfully"
            }
        )
    }
    catch(err){
        console.log(err);
        console.log(err);
        res.status(500).json({
            sucess:false,
            data:"error",
            message:err.message,
        })


    }
}