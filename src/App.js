
import './App.css';
import Navbar from './component/Navbar';
import TravelCard from './component/TravelCard';
import travelData from './travelData';

function App() {
  const travelElemnt = travelData.map((tdata)=>{
    return( <TravelCard
    key={tdata.id}
      {...tdata}
      />
    )
  })
  return (
    <div className="App">
     <Navbar/>
     <section>
     {travelElemnt}
     </section>
     
    </div>

  );
}

export default App;
