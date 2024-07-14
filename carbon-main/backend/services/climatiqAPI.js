const axios = require('axios');

const API_URL = 'https://api.climatiq.io/data/v1/estimate';
const API_KEY = ''; // Replace with your actual API key

const estimateEmissions = async ({ activity, quantity, unit }) => {
    const data = {
        emission_factor: {
            activity_id: activity,
            data_version: '^6',
        },
        parameters: {
            energy: quantity,
            energy_unit: unit,
        },
    };

    const response = await axios.post(API_URL, data, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
    });

    return response.data;
};

module.exports = { estimateEmissions };
