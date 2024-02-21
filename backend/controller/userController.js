import Users from "../model/userModel.js";

export const createUser = async (req, res) => {
    try {
        const { groom_name, bride_name, email, firebaseUserId, todolist } = req.body;

        // Check if the required fields are present
        if (!groom_name || !bride_name || !email || !firebaseUserId) {
            return res.status(400).json({ message: "Invalid user data" });
        }

        // Check if the email is already in use
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email address is already in use" });
        }

        // Create a new user instance
        const userData = new Users({
            groom_name,
            bride_name,
            email,
            firebaseUserId,
            todolist
        });

        // Save the user to the database
        const savedData = await userData.save();

        res.status(201).json(savedData);
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};


export const checkuser = async (req, res) => {
    const { firebaseUserId } = req.params;
  
    try {
      // Check if the user with the provided Firebase ID exists in the database
      const existingUser = await Users.findOne({ firebaseUserId });
  
      if (existingUser) {
        res.status(200).json({ exists: true });
      } else {
        res.status(200).json({ exists: false });
      }
    } catch (error) {
      console.error('Error checking user in the database:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
}
  
 // Controller function to get user data
export const getUserData = async (req, res) => {
  try {
     // Access the firebaseUserId from req.params
     const { firebaseUserId } = req.params;
    const user = await Users.findOne({ firebaseUserId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { groom_name, bride_name, email,todolist } = user;
    console.log({todolist});
    res.json({ groom_name, bride_name, email });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Internal Server Error');
  }
};

