const db = require('../db/dbConfig.js');

const getAllergies = async () => {
  try {
    const allAllergies = await db.any('SELECT * FROM allergies');
    return allAllergies;
  } catch (error) {
    return error;
  }
};

const getAllergy = async (id) => {
  try {
    const oneAllergy = await db.one(`SELECT * FROM allergies WHERE id=${id}`);
    return oneAllergy;
  } catch (error) {
    return error;
  }
};

const createAllergy = async ({ allergy_type }) => {
  try {
    const newAllergy = await db.one(
      `INSERT INTO allergies (allergy_type) VALUES(${allergy_type}) RETURNING *`,
    );
    return newAllergy;
  } catch (error) {
    return error;
  }
};

const updateAllergy = async (id, { allergy_type, ...otherStuff }) => {
  try {
    const updateAllergy = await db.one(
      `UPDATE allergies SET allergy_type=${allergy_type} where id=${id} RETURNING *`,
    );
    return updateAllergy;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const deleteAllergy = async (id) => {
  try {
    const oneAllergy = await db.one(
      `DELETE FROM allergies WHERE id=${id} RETURNING *`,
    );
    return oneAllergy;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllergies,
  getAllergy,
  createAllergy,
  updateAllergy,
  deleteAllergy,
};
