
import './App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import Child3 from './components/Child3';
import { AppProvider } from './context/Context';

function App() {


  return (
    <div className="App">
      <AppProvider>
        <Child2 />
        <Child1 />
        <Child3 />
      </AppProvider>


    </div>
  );
}

export default App;
