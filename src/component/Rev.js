import {FaGamepad, FaArrowLeft, FaArrowRight} from 'react-icons/fa'

function Rev ({img, name, type, description, moveLeft, moveRight, moveRandom}){
  return (
  <div className="game">
    <div>
      <div className="styleDiv"><FaGamepad className='gamepad' /></div>
      <img className="image" src={img} alt="game"/>
    </div>
    <h2>{name}</h2>
    <h3>{type}</h3>
    <p>{description}</p>
    <div className='btn'>
      <button className="left" onClick={moveLeft}><FaArrowLeft /></button>
      <button className='random' onClick={moveRandom}>Random</button>
      <button className='right' onClick={moveRight}><FaArrowRight  /></button>
    </div>
  </div>
  );
}

export default Rev;