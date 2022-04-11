import User from "../model/User.js"

export const addUser = async (req, res) => {
    try {
        let exist = await User.findOne({ googleId: req.body.googleId });
        if (exist) {
            res.status(200).json('user already exist');
            return;
        }
        const newprofile = new User(req.body);

        console.log(newprofile, "newprofile");
        await newprofile.save();
        res.status(200).json("User save successfully")
    } catch (error) {
        res.status(500).json(error);
    }
}
///getting users information from database
export const getUsers = async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).json(user);//sending in frontend
    } catch (error) {
     res.status(500).json(error);
    }
}