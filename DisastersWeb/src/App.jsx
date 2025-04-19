import './App.css';

import { Dashbord } from './Components/HomePage/Dashbord';
import { GetStart } from './Components/HomePage/GetStart';
import { IncidentHeader } from './Components/HomePage/IncidentHeader';
import { Incidents } from './Components/HomePage/Incidents';
import { Locations } from './Components/HomePage/Locations';
import { Navbar } from './Components/Sheard/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <main className="font-Onest">
          <Navbar />
          <Routes>
          
              <Route path="/" element={<Dashbord />} />
            <Route path="/incident" element={<Incidents />} />
            
          
          
              <Route path="/locations" element={<Locations/>} />

          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
{/* <Navbar />
          <Dashbord />
          <Incidents /> */}