import axios from 'axios';
import { useState, useEffect } from 'react';
import Food from './Food';
import '../Styles/FoodGallery.scss';

export default function FoodGallery() {
  const URL = process.env.REACT_APP_API_URL;
  const [foods, getAllFoods] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/myfoods`)
      .then((res) => getAllFoods(res.data.payload))
      .catch((err) => console.log(err.message.payload));
  }, [URL]);

  return (
    <div id='FoodGallery'>
      <table id='FoodTable'>
        <strong>
          <h1> Table of Foods</h1>
        </strong>
        <tbody id='FoodTableContents'>
          {foods.map((food) => {
            return <Food key={food.name} info={food} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
