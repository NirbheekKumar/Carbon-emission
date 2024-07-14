// models/emissionModel.js
const admin = require('../config/firebaseAdmin');

const emissionSchema = {
  co2e: Number,
  co2e_unit: String,
  co2e_calculation_method: String,
  co2e_calculation_origin: String,
  emission_factor: {
    name: String,
    activity_id: String,
    id: String,
    access_type: String,
    source: String,
    source_dataset: String,
    year: Number,
    region: String,
    category: String,
    source_lca_activity: String,
    data_quality_flags: Array,
  },
  constituent_gases: {
    co2e_total: Number,
    co2e_other: Number,
    co2: Number,
    ch4: Number,
    n2o: Number,
  },
  activity_data: {
    activity_value: Number,
    activity_unit: String,
  },
  audit_trail: String,
  userId: String, // Store the user who requested the calculation
};

exports.saveEmissionData = async (data, userId) => {
  const emissionData = {
    ...data,
    userId,
  };

  const ref = admin.firestore().collection('emissions');
  await ref.add(emissionData);
  return emissionData;
};
