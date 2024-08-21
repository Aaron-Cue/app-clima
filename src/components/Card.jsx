import '../styles/card.css'

const Card = ({ title, value, unit }) => {
  
  return (
    <div className="card">
      <div>{title}</div>
      <div>{value} <span>{unit}</span>
      </div>
    </div>
  )
}

export default Card