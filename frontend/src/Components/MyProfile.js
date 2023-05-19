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
      className='w-screen  h-screen rounded overflow-hidden shadow-lg border-red'
    >
      <p
        id='WelcomeBlurb'
        className='text-center font-bold text-2xl mb-5 font-fonts text-red'
      >
        {' '}
        Welcome Back, User!
      </p>

      <div className='flex items-center w-full h-5/6'>
        <img
          id='UserImage'
          className='w-full rounded-2xl border-logored '
          //src={info.image}
          src={require('../Assets/TableForTwoLogo.png')}
          alt={'signedInUser profile pic'}
        />
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
          <h1
            id='UserGender'
            className='text-center text-red text-xl font-fonts'
          >
            {/*{profile.sexual_orientation}, {profile.gender} */} Dummy Sexual
            Orientation, Dummy Gender
          </h1>
          <h1
            id='FoodPreference'
            className='text-red font-fonts text-center text-lg mt-2em '
          >
            Fav Foods: {/*{profile.food_preferences}*/} Dummy Favorite Foods
          </h1>
          <h1
            id='FoodPreference'
            className='text-red font-fonts text-center text-lg mt-2em '
          >
            Dietary Restrictions: {/*{profile.dietary_restrictions}*/} Dummy
            Banned Foods
          </h1>
          <h1 className='text-red font-fonts text-center text-lg mt-2em '>
            Email: {/*{profile.email}*/} Dummy Email
          </h1>{' '}
          <h1 className='text-red font-fonts text-center text-lg mt-2em '>
            ChatHandle: {/*{profile.chat_handle}*/} Dummy Chat Handle
          </h1>{' '}
          <div>
            <h1 className='text-red font-fonts text-center text-lg mt-2em '>
              About Me: {/*{profile.chat_me}*/}
              <p className='text-red font-fonts text-center text-lg mt-2em '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </h1>{' '}
          </div>
        </div>
      </div>
      <Link to='/edit' className='place-items-end'>
        <img
          id='EditButton'
          className='text-white w-12 h-12'
          src={require('../Assets/Edit.png')}
          alt='Edit Icon'
        />
      </Link>
    </div>
  );
}
