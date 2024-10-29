import React from 'react';
import { Link } from 'react-router-dom';
import imageSortingCard from '../../assets/sorting.gif';
import logo from '../../assets/logo.jpg'
import imageLinkedList from '../../assets/list.gif'
import '../HomePage/HomePage.css'

const HomePage = () => {
  return (
    <div className='whole-container flex  w-100 flex-wrap justify-center'>
      <img src={logo} className='w-90 h-60 ' alt='logo.png' />
      <div className='card-container-row-one  flex   w-100'>

          <Link className='sorting-card-container  px-8 ' to='/sorting-visualizer'>
            <img className='rounded-lg w-25'src={imageSortingCard}  alt='Sorting Visualizer' />
            <h1 className='naming-of-card font-bold'>Sorting</h1>
          </Link>
          <Link className='sorting-card-container  px-8 '  to='/LinkedList'>
            <img className='rounded-lg w-25' src={imageLinkedList}  alt='Sorting Visualizer' />
            <h1 className='naming-of-card font-bold'>Linked List</h1>
          </Link>
          <Link className='sorting-card-container  px-8 ' to='/sorting-visualizer'>
            <img className='rounded-lg w-25' src={imageSortingCard}  alt='Sorting Visualizer' />
            <h1 className='naming-of-card font-bold'>yet-to-do</h1>
          </Link>
          <Link className='sorting-card-container  px-8 ' to='/sorting-visualizer'>
            <img className='rounded-lg w-25' src={imageSortingCard}  alt='Sorting Visualizer' />
            <h1 className='naming-of-card font-bold'>yet-to-do</h1>
          </Link>
      </div>
    </div>
  );
};

export default HomePage;
