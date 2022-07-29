import { PersonalDetails } from './PersonalDetails'
import { Address } from './Address';
import { WorkSetup } from './WorkSetup';
import { Completed } from './Completed';
import '../styles/multiform.css';
import '../styles/stepper.css';
import {  useContext } from 'react';
import { FormContext } from '../context/FormContext';
import { Stepper, Step } from 'react-form-stepper';

export const MultiForm = () => {
    let { step, setStep } = useContext(FormContext)

    const stepStyleConfig = {
        activeBgColor: "#2260ff",
        completedBgColor: "#2260ff"
      };

    const handleStep = (nextStep) => {
        switch (nextStep) {
            case 0:
                return <PersonalDetails />
            case 1:
                return <Address />
            case 2:
                return <WorkSetup />
            case 3:
                return <Completed />
            default:
                break;
        }
    }
    return (
        <>
            <div className='multi-form'>
                <h3>Eden</h3>
                <div className="stepper">
                    <Stepper styleConfig={stepStyleConfig}activeStep={step}>
                        <Step onClick={() => setStep(0)}/>
                        <Step onClick={() => setStep(1)}/>
                        <Step onClick={() => setStep(2)}/>
                        <Step onClick={() => setStep(3)}/>
                    </Stepper>
                </div>
            </div>
            {handleStep(step)}
        </>
    )
}