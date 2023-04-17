const db = require('../db/dbConfig.js');

//GET
const getAllUsers = async () => {
  try {
    const allUsers = await db.any('SELECT * FROM users');
    return allUsers;
  } catch (error) {
    return error;
  }
};

//GET:id
const getUser = async (id) => {
  try {
    const user = await db.one(`SELECT * FROM users WHERE id='${id}'`, id);
    return user;
  } catch (error) {
    return error;
  }
};
const getUserByFirebase = async (id) => {
  try {
    const user = await db.one(
      `SELECT * FROM users WHERE firebase_id='${id}'`,
      id,
    );
    return user;
  } catch (error) {
    return error;
  }
};
//CREATE
const createUser = async (user) => {
  try {
    let {
      name,
      image,
      email,
      age,
      dietary_restrictions,
      food_preferences,
      sexual_orientation,
      gender,
      about_me,
      firebase_id,
      chat_handle,
    } = user;
    return await db.one(
      `INSERT INTO users (name, image, email, age, dietary_restrictions, food_preferences, sexual_orientation, gender, about_me, firebase_id, chat_handle) VALUES 
	  ('${name}', '${image}', '${email}', '${age}','${dietary_restrictions}', '${food_preferences}', '${sexual_orientation}', '${gender}', '${about_me}', '${firebase_id}', '${chat_handle}') RETURNING *`,
      [
        name,
        image,
        email,
        age,
        dietary_restrictions,
        food_preferences,
        sexual_orientation,
        gender,
        about_me,
        firebase_id,
        chat_handle,
      ],
    );
  } catch (error) {
    return error;
  }
};
//DELETE
const deleteUser = async (id) => {
  try {
    return await db.one(`DELETE FROM users WHERE id='${id}' RETURNING *`, id);
  } catch (error) {
    return error;
  }
};
//UPDATE
const updateUser = async (
  id,
  {
    name,
    image,
    email,
    age,
    dietary_restrictions,
    food_preferences,
    sexual_orientation,
    gender,
    about_me,
    firebase_id,
    chat_handle,
  },
) => {
  try {
    return await db.one(
      `UPDATE users SET name='${name}', image='${image}', email='${email}', age='${age}', dietary_restrictions='${dietary_restrictions}, food_preferences='${food_preferences}', sexual_orientation='${sexual_orientation}', gender='${gender}', about_me='${about_me}', firebase_id='${firebase_id}', chat_handle='${chat_handle}' WHERE id='${id}' RETURNING *`,
      [
        name,
        image,
        email,
        age,
        dietary_restrictions,
        food_preferences,
        sexual_orientation,
        gender,
        about_me,
        firebase_id,
        chat_handle,
        id,
      ],
    );
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUsers,
  getUser,
  getUserByFirebase,
  createUser,
  deleteUser,
  updateUser,
};
