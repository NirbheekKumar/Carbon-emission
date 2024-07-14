const { estimateEmissions } = require('../services/climatiqAPI');

const calculateEmissionsHandler = async (req, res) => {
    const { activityId, energy, energyUnit } = req.body;

    try {
        const emissionsData = await estimateEmissions({
            activity: activityId,
            quantity: energy,
            unit: energyUnit,
        });
        res.status(200).json(emissionsData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { calculateEmissions: calculateEmissionsHandler };
