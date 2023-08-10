
import React, {useState, useEffect} from "react";
import GIF from "./images/Algebra_logo.gif";
import img from './images/algebra_logo.png';
import Kroma from './images/Kroma.png';
import {Link} from "react-router-dom";


function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2200)
  },[])

  return (
  <div>
        {
      loading ? (
        <div style={{textAlign: "center"}}>
      <img src={GIF} loading={loading} class="opener" />
      </div>

      ) : (
      <>
     <section id ="top"></section>
      <div class="borders">
        <br></br>
        <br></br>
        <div style={{textAlign: "center"}}>
        <h2 style={{textAlign: "center"}}>
        <b>SELECT YOUR PATH</b>
        <br></br>
        <br></br>
        <img src={img} style={{width: '15%'}}/>
        </h2>
        <br></br>
        <br></br>

        <Link className="nav-link" to='/merchant'><button style={{padding: 5, paddingLeft: 20, paddingRight: 20}}>For Merchants</button></Link>
        <br></br>
        <Link className="nav-link" to='/selector'><button style={{padding: 5, paddingLeft: 20, paddingRight: 20}}>Store Selector</button></Link>
        <br></br>
        <br></br>

        <a href="https://kroma.network/"><img src={Kroma} style={{width: '35px', paddingTop:"1px"}}/></a>
        <br></br>
        <br></br>
        <p style={{textAlign: "center"}}><i>operational on kroma</i></p>
        </div>
      </div>
</>
            )}
      </div>


  );
}

export default Home;
