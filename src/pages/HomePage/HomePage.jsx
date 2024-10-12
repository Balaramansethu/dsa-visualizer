import React from 'react';
import { Link } from 'react-router-dom';
import imageSortingCard from '../../assets/leo.gif';
import logo from '../../assets/logo.jpg'
import '../HomePage/HomePage.css'

const HomePage = () => {
  return (
    <div className='whole-container flex  w-100 flex-wrap justify-center'>
      <img src={logo} className='w-90 h-60 ' alt='logo.png' />
      <div className='card-container-row-one  flex   w-100'>
        
          <Link className='sorting-card-container  px-8 ' to='/sorting-visualizer'>
            <img className='rounded-lg w-25'src={imageSortingCard}  alt='Sorting Visualizer' />
          </Link>
          <Link className='sorting-card-container  px-8 '  to='/sorting-visualizer'>
            <img className='rounded-lg w-25' src={imageSortingCard}  alt='Sorting Visualizer' />
          </Link>
          <Link className='sorting-card-container  px-8 ' to='/sorting-visualizer'>
            <img className='rounded-lg w-25' src={imageSortingCard}  alt='Sorting Visualizer' />
          </Link>
          <Link className='sorting-card-container  px-8 ' to='/sorting-visualizer'>
            <img className='rounded-lg w-25' src={imageSortingCard}  alt='Sorting Visualizer' />
          </Link>
      </div>
    </div>
  );
};

export default HomePage;
