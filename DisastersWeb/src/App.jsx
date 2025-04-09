import './App.css';
import { Card } from './Components/HomePage/Card';
import { ChatCypher } from './Components/HomePage/ChatCypher';
import { Dashbord } from './Components/HomePage/Dashbord';
import { Header } from './Components/Sheard/Header';
import { Navbar } from './Components/Sheard/Navbar';



function App() {
  return (
    <>
      <main className='font-Onest'>
        <Navbar />
        <Dashbord />

      </main>
    </>
  );
}

export default App;
