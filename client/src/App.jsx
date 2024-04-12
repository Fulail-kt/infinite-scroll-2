import React, { useState, useEffect } from 'react';
import './App.css';
import api from './axios/api';
import moment from 'moment-timezone';
import Skeleton from './components/skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [nextPage, setNextPage] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    fetchVideos(nextPage);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [nextPage]);

  const fetchVideos = async () => {
    setLoading(true);
    const response = await api.get(`getUsers?page=${nextPage}`);
    setUsers((prevData) => [...prevData, ...response.data]);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      const nextPageNumber = nextPage + 1;
      console.log(nextPageNumber)
      setNextPage(nextPageNumber);
    }
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };


  return (
    <>
      <div className='w-full min-h-screen'>
        <div className='bg-gray-700 w-full h-20 flex justify-between items-center px-16'>
          <h1 className='text-white font-bold tracking-wider'>Infinite Scroll</h1>
          <button className='' onClick={toggleTheme}>
            <FontAwesomeIcon color='white' icon={theme === 'light' ? faMoon : faSun} />
          </button>
        </div>
        <div className={`${theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white'} w-full grid grid-cols-1 place-items-center overflow-hidden`}>
          <div className='w-full md:w-[50%] mt-10'>
            {users.map((item, index) => (
              <>
                <div className='w-full flex items-center flex-col gap-4 overflow-y-hidden mb-1 p-4 md:p-0 md:flex-row md:items-start' key={index + Date.now()}>
                  <div className='md:h-40 w-60 md:w-52'><img className='rounded-lg' src={item?.node?.field_photo_image_section} alt={item?.node?.title} /></div>
                  <div className='w-60 md:w-2/4'>
                    <h1 className='font-bold font-sans text-start line-clamp-3'>{item?.node?.title}</h1>
                    <div>
                      <p className="text-start text-xs mt-2 font-semibold font-sans text-gray-500">
                        {moment.unix(item?.node?.last_update).tz('Asia/Kolkata').format('MMM D YYYY, hh:mm A')} IST
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
            {loading && (
              <Skeleton />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
