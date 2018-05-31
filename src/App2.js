import React, {Component} from 'react';
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer';
import characters from './characters.json';
import './App.css';

let score = 0;
let topScore = 0;


// const App = (props) => (

//   <div className='clickyapp'>
//     <Header />
//     <div id='imageArea' className='container'>
//       <div className='row'>
//         <div className='col-md-2'></div>
//         <div className='col-md-8'>
//           <div className='row'>
//             <div className='col-md-3'>
//               <Card id={characters[0].id} name={characters[0].name} img={characters[0].image} />
//             </div>
//             <div className='col-md-3'>
//               <Card id={characters[1].id} name={characters[1].name} img={characters[1].image} />
//             </div>
//             <div className='col-md-3'>
//               <Card id={characters[2].id} name={characters[2].name} img={characters[2].image} />
//             </div>
//             <div className='col-md-3'>
//               <Card id={characters[3].id} name={characters[3].name} img={characters[3].image} />
//             </div>
//           </div>
//         </div>
        
//         <div className='col-md-2'></div>
//       </div>
      {/* <div className='row'>

        <div className='col-md-2'></div>

        <div className='col-md-8'>
          <div className='row'>
            <div className='col-md-3'>
              <Card id={characters[0].id} name={characters[0].name} img={characters[0].image} />
            </div>
            <div className='col-md-3'>
              <Card id={characters[1].id} name={characters[1].name} img={characters[1].image} />
            </div>
            <div className='col-md-3'>
              <Card id={characters[2].id} name={characters[2].name} img={characters[2].image} />
            </div>
            <div className='col-md-3'>
              <Card id={characters[3].id} name={characters[3].name} img={characters[3].image} />
            </div>
          </div>
        </div>
        
        <div className='col-md-2'></div>
      </div> */}
      {/* <div className='row'>

        <div className='col-md-2'></div>

        <div className='col-md-8'>
          <div className='row'>
            <div className='col-md-3'>
              <Card id={characters[0].id} name={characters[0].name} img={characters[0].image} />
            </div>
            <div className='col-md-3'>
              <Card id={characters[1].id} name={characters[1].name} img={characters[1].image} />
            </div>
            <div className='col-md-3'>
              <Card id={characters[2].id} name={characters[2].name} img={characters[2].image} />
            </div>
            <div className='col-md-3'>
              <Card id={characters[3].id} name={characters[3].name} img={characters[3].image} />
            </div>
          </div>
        </div>
        
        <div className='col-md-2'></div>
      </div> */}
      {/* <div className='row'>

        <div className='col-md-2'></div>

        <div className='col-md-8'>
          <div className='row'>
            <div className='col-md-3'>
              <Card id={characters[0].id} name={characters[0].name} img={characters[0].image} />
            </div>
            <div className='col-md-3'>
              <Card id={characters[1].id} name={characters[1].name} img={characters[1].image} />
            </div>
            <div className='col-md-3'>
              <Card id={characters[2].id} name={characters[2].name} img={characters[2].image} />
            </div>
            <div className='col-md-3'>
              <Card id={characters[3].id} name={characters[3].name} img={characters[3].image} />
            </div>
          </div>
        </div>
        
        <div className='col-md-2'></div>
      </div> */}
    {/* </div>

    <Footer />
  </div >
) */}

export default App;