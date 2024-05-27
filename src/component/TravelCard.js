import '../App.css';
import tCard from "../travelData";

export default function TravelCard(props) {
  return (
    <div className='fulln'>
      <div className="Limg">
        <img src={`/images/${props.img}`} />
      </div>
      <div >
      <div className='crd-t'>
     <img src={`/images/${props.star}`}/>  {/*location image */}
       <p>{props.country}</p>
      </div>
      <div className='crd-l'>
        <h1>{props.topic}</h1>
      </div>

      <div className='crd-d'>
       <h3>{props.date}</h3>
      </div>

      <div>
        <p>
            {props.text}
        </p>
      </div>

      
      </div>
    </div>
  );
}
