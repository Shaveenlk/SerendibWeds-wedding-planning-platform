import PastWedding from "../model/pastWeddingModel.js";

export const getEventDetails = async (req, res) => {
    try {
        console.log(req.params.id);
        const photographer_videographer_id = req.params.id;
        const weddingDetails = await PastWedding.find({ photographer_videographer: "1" })
        console.log(weddingDetails);
        if (!weddingDetails) {
            return res.status(404).json({ message: "Wedding details not found" });
        }

        res.json({ weddingDetails });
    } catch (error) {
        console.error('Error fetching wedding details:', error);
        res.status(500).send('Internal Server Error A');
    }
}
