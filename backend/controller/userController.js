import Users from "../model/userModel.js";

export const createUser = async (req, res) => {
    try{
    const userData = new Users(req.body);
    console.log(Users);
    if(!userData){
        return res.status(404).json({message: "Invalid user data"});
    }
    const {email} = userData;
    const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email address is already in use" });
        }
    const savedData = await userData.save();
    res.status(200).json(savedData);

    } catch (err) {
        res.status(500).json(err);
    } 
}