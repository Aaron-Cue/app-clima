import { useState } from 'react';
import '../styles/BarraBusqueda.css';

const BarraBusqueda = ({ changeCity }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeCity(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de la ciudad..."
        onChange={handleChange}
      />
    </form>
  );
};

export default BarraBusqueda;
