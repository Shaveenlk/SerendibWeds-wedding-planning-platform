import PastWedding from "../model/pastWeddingModel.js";

export const getWeddingDetails = async (req, res) => {
    try {
        const wedding_id = req.params.id;
        const weddingDetails = await PastWedding.findById(wedding_id);
        if (!weddingDetails) {
            return res.status(404).json({ message: "Wedding details not found" });
        }
        res.json({ weddingDetails });
    } catch (error) {
        console.error('Error fetching wedding details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
