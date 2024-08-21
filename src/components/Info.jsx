import '../styles/info.css';
import Card from '../components/Card';

const Info = ({ data }) => {
  
  if (!data.main) {
    return null;
  }

  const temperatura = parseInt(data.main.temp - 273.15);
  const temperaturaMinima = parseInt(data.main.temp_min - 273.15);
  const temperaturaMaxima = parseInt(data.main.temp_max - 273.15);
  const iconType = data.weather[0].icon.slice(0, 2);
  const iconUrl = `https://openweathermap.org/img/wn/${iconType}d@2x.png`;

  return (
    <div className="info">
      <div className="info-principal">
        <h2 className="city">
          {data.name}, {data.sys.country}
        </h2>
        <div className="temp-icon">
          <img src={iconUrl} alt="icon" className="icon" />
          <div className="temp-info">
            <div className="desc">{data.weather[0].description}</div>
            <div className="temp">{temperatura} °C</div>
          </div>
        </div>
      </div>
      <div className="info-extra">
        <Card title={'viento'} value={data.wind.speed} unit={'k/h'} />
        <Card title={'humedad'} value={data.main.humidity} unit={'m³'} />
        <Card title={'minima'} value={temperaturaMinima} unit={'°C'} />
        <Card title={'maxima'} value={temperaturaMaxima} unit={'°C'} />
      </div>
    </div>
  );
};

export default Info;
