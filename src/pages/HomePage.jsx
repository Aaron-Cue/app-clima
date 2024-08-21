import { useState, useEffect } from 'react';
import BarraBusqueda from '../components/BarraBusqueda';
import Info from '../components/Info';

const HomePage = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState([]);

  const changeCity = (cityValue) => {
    const cityLower = cityValue.toLowerCase();
    const city = cityLower.charAt(0).toUpperCase() + cityLower.slice(1);
    setCity(city);
  };

  const apiKey = 'c0a9ea148ffd64ef3a026437187cd96a';

  const getData = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData(city);
  }, [city]);

  console.log(data);

  return (
    <>
      <BarraBusqueda changeCity={changeCity} />
      <Info data={data} />
    </>
  );
};

export default HomePage;
