import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { FormContext } from '../context/FormContext';
import { useContext } from 'react';


export const Completed = () => {
    const {global, step, setStep} = useContext(FormContext)
    return (
        <div className="multi-form-inner">
            <div>
                <CheckCircleIcon className="completed-icon"/>
            </div>
            <h3>Congratulations, {global.display}</h3>
            <p>You have completed onboarding, you can start using the {global.workspace}</p>
            <form>
                <button className='submit-button'>Launch {global.workspace}</button>
            </form>
        </div>
    )
}