import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function LoggedInFireBaseProfile({ info, signedInUser }) {
  const { id } = useParams();
  //const navigate = useNavigate();
  const [profile, viewProfile] = useState({
    name: '',
    image: '',
    email: '',
    age: 0,
    dietary_restrictions: '',
    food_preferences: '',
    sexual_orientation: '',
    gender: '',
    about_me: '',
    chat_handle: '',
  });
  useEffect(() => {
    if (signedInUser) return;
    axios
      .get(`${API}/myprofile/${viewProfile.id}`)
      .then((response) => {
        viewProfile(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div
      id='UserDiv'
      className='max-w-sm rounded overflow-hidden shadow-lg border-red'
    >
      <p
        id='WelcomeBlurb'
        className='text-center font-bold text-2xl mb-5 font-fonts text-red'
      >
        {' '}
        Welcome Back, User!
      </p>
      <div className='flex flex-col items-center'>
        <img
          id='UserImage'
          className='w-full rounded-3xl border-logored '
          //src={info.image}
          alt={'signedInUser profile pic'}
        />
      </div>
      <div id='UserInnerDiv'>
        <h1
          id='UserName'
          className='text-center font-bold text-2xl mb-5 font-fonts text-red'
        >
          {/* {profile.name}, {profile.age} */} Dummy Name, Dummy Age
        </h1>
        {/* <h1 id="UserEmail" class="text-gray-700 text-base">
          Email: {info.email}
        </h1> */}
        <h1 id='UserGender' className='text-center text-red text-xl font-fonts'>
          {/*{profile.sexual_orientation}, {profile.gender} */} Dummy Sexual
          Orientation, Dummy Gender
        </h1>
        <h1
          id='FoodPreference'
          className='text-red font-fonts text-center text-lg mt-2em '
        >
          Fav Foods: {/*{profile.food_preferences}*/} Dummy Favorite Foods
        </h1>
      </div>
    </div>
  );
}
