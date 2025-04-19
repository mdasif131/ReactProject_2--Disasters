import './App.css';

import { Dashbord } from './Components/HomePage/Dashbord';
import { DescribeIncident } from './Components/HomePage/DescribeIncident';
import { GetStart } from './Components/HomePage/GetStart';
import { IncidentForm } from './Components/HomePage/IncidentForm';

import { Incidents } from './Components/HomePage/Incidents';
import { IncidentsMap } from './Components/HomePage/IncidentsMap';
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
            <Route path="/newIncident" element={<GetStart />} />
            <Route path="/nextStep" element={<IncidentForm />} />
            <Route path="/next" element={<IncidentsMap />} />

            <Route path="/getstart" element={<DescribeIncident />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
