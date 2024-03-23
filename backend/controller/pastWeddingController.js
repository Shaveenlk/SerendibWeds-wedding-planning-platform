import pastweddings from "../model/pastWeddingModel.js";

export const getWeddingDetails = async (req, res) => {
    try {
        const {wedding_id} = req.params;
        console.log(wedding_id)
        const weddingDetails = await pastweddings.findOne({wedding_id});
        console.log(weddingDetails)
        if (!weddingDetails) {
            return res.status(404).json({ message: "Wedding details not found" });
        }
        res.json({ weddingDetails });
    } catch (error) {
        console.error('Error fetching wedding details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
