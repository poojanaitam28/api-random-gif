import './App.css';
import Random from './components/Random';
import Tags from './components/Tags';

function App() {
  return (
    <div className="background relative w-full h-screen flex flex-col items-center overflow-x-hidden">
      <h1 className='bg-white rounded-md w-[90%] text-center mt-[40px] px-2 py-2 text-2xl font-bold'>RANDOM GIFS</h1>
      <div className='w-full flex flex-col items-center mt-[30px]'>
        <Random />
        <Tags />
      </div>
    </div>
  );
}

export default App;
