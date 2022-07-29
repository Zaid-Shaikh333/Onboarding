import '../styles/multiform.css';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const WorkSetup = () => {
    const {global, step, setStep} = useContext(FormContext)
    const [ worktype, setWorktype] = useState(global.type)
    const [error, setError] = useState('');

    const handleInput = (e) => {
        e.preventDefault();
        if(worktype === "" )
            setError("Please select a Type");
        else
        {
            setError('');
            global.type = worktype;
            setStep(3)
        }            
    }

    return (
        <div className='multi-form-inner'>
            <strong>How are you planning to use Eden?</strong>
            <p>We'll streamline your setup experience accordingly</p>
            <form>
                <div className="cards">
                    <div className="workspacecards" 
                    onClick={(e) => setWorktype('self')}
                    >
                        <PersonIcon />
                        <h5>For Myself</h5>
                        <p>Write better. Think more clearly. Stay organised.</p>
                    </div>
                    <div className="workspacecards"
                    onClick={(e) => setWorktype('team')}
                    >
                        <GroupsIcon />
                        <h5>With my team</h5>
                        <p>Wikis, docs, tasks & projects, all in one place.</p>
                    </div>
                </div>
                <button type="submit" onClick={handleInput} className="submit-button">Create Workspace</button>
            </form>
            <div className="validation-alert">
                <p>{error !== '' ? 
                <span className="form-error">
                    <ErrorOutlineIcon/>
                    &nbsp;
                    {error}
                </span>
                 : 
                null}</p>
            </div>
        </div>
    )
}