const db = require('../db/dbConfig.js');

const getAllFoods = async () => {
  try {
    const allFoods = await db.any('SELECT * FROM foods');
    return allFoods;
  } catch (error) {
    return error;
  }
};

const getFood = async (id) => {
  try {
    const oneFood = await db.one(`SELECT * FROM foods WHERE id= ${id}`);
    return oneFood;
  } catch (error) {
    return error;
  }
};

const createFood = async (foodData) => {
  const { name, image } = foodData;
  try {
    const newFood = await db.one(
      `INSERT INTO foods (name, image) VALUES('${name}', '${image}') RETURNING *;`,
    );
    return newFood;
  } catch (error) {
    return error;
  }
};

const updateFood = async (updatedFoodData) => {
  const { id, name, image, ...otherStuff } = updatedFoodData;
  try {
    const updateFood = await db.one(
      `UPDATE foods SET name = '${updatedFoodData.name}',image ='${updatedFoodData.image}' where id='${updatedFoodData.id}'  RETURNING *`,
    );
    return updateFood;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const deleteFood = async (foodID) => {
  try {
    const oneFood = await db.one(
      `DELETE FROM foods WHERE id='${foodID}' RETURNING *`,
      id,
    );
    return oneFood;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllFoods,
  getFood,
  createFood,
  updateFood,
  deleteFood,
};
