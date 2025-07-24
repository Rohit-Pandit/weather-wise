import house from '../assets/house.png';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={house} alt="image not found" />
        <div className="foot">
          <h4>Made In India❤️</h4>
        </div>
        
    </div>
  )
}

export default Footer