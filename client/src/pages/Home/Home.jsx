import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import './Home.css';
import HomeCard from '../../components/HomeCard/HomeCard';
import { getAllHouses } from '../../services/api';

const Home = () => {
  const [activeButton, setActiveButton] = useState('rent');
  const [houses, setHouses] = useState([]);

  const handleButtonClick = (type) => {
    setActiveButton(type);
  };

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const housesData = await getAllHouses();
        console.log('this is the house data', housesData);
        let filteredHouses;

        if (activeButton === 'rent') {
          filteredHouses = housesData.filter(house => house.availability === 'rent');
        } else if (activeButton === 'sell') {
          filteredHouses = housesData.filter(house => house.availability === 'sale');
        } else {
          filteredHouses = housesData;
        }

        setHouses(filteredHouses);
      } catch (error) {
        console.log(error)
      }
    };

    fetchHouses();
  }, [activeButton]); // Dependency array includes activeButton

  return (
    <div>
      <div className="home-header">
        <Header />
      </div>
      <div className="home-browser-properties">
        <h2 className="home-browse-text">Browse Properties</h2>
        <div className="button-container">
          <button
            className={activeButton === 'rent' ? 'active' : ''}
            onClick={() => handleButtonClick('rent')}
          >
            Rent
          </button>
          <button
            className={activeButton === 'sell' ? 'active' : ''}
            onClick={() => handleButtonClick('sell')}
          >
            Sell
          </button>
          <button
            className={activeButton === 'all' ? 'active' : ''}
            onClick={() => handleButtonClick('all')}
          >
            All
          </button>
        </div>
      </div>
      <div className="house-grid">
        {houses.map((house) => (
          <div key={house.id}>
            <HomeCard data={house} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
