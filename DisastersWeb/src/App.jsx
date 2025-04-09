import './App.css';

import { Dashbord } from './Components/HomePage/Dashbord';
import { Navbar } from './Components/Sheard/Navbar';

function App() {
  return (
    <>
      <main className="font-Onest">
        <Navbar />
        <Dashbord />
      </main>
    </>
  );
}

export default App;
