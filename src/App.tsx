import { useState } from 'react';
import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-black text-white text-3xl'>
      hello world!
    </div>
  );
}

export default App;
