import { MultiForm } from './components/MultiForm';
import './App.css';
import { FormContext } from './context/FormContext';
import { useState} from 'react';

function App() {
  const [global, setGlobal] = useState({
    name: "",
    display: "",
    workspace: "",
    url: "",
    type: "",
  })
  const[step, setStep] = useState(0);

  return (
    <div className="App">
      <FormContext.Provider value={{global, step, setStep}}>
        <MultiForm />
      </FormContext.Provider>
    </div>
  );
}

export default App;
