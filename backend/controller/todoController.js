import Users from "../model/userModel.js";

export const getTodo = async (req, res) => {
    try {
         // Access the firebaseUserId from req.params
     const { firebaseUserId } = req.params;
     const user = await Users.findOne({ firebaseUserId });
     if (!user) {
       return res.status(404).json({ message: 'User not found' });
     }
     const { todolist } = user;
    res.json({ todolist });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).send('Internal Server Error');
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const { firebaseUserId,taskId } = req.params;
        // const { index } = req.body;
        const user = await Users.findOne({ firebaseUserId });
        // if (!user) {
        //     return res.status(404).json({ message: 'User not found' });
        // }
        user.todolist.splice(taskId, 1);
        await user.save();
        res.json({success: true, message: 'Todo deleted successfully'});
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).send('Internal Server Error');
    }
}

