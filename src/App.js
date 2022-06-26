import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom';


import Homepage from './compoents/HomePage/HomePage';
import List from './compoents/List/List';
import Restaurant from './compoents/Restaurant/Restaurant';


function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path='/homepage' element={<Homepage/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/restaurant' element={<Restaurant/>}/>
      </Routes>

    <div className="App">
      <div className='container bg-info'>
        <div className='row'>
          <div className='col-12'>
            <h2>Foodie app</h2>
          </div>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
