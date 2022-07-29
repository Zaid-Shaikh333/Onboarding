import { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const PersonalDetails = () => {
    const {global, step, setStep} = useContext(FormContext)
    const [name, setName] = useState(global.name);
    const [error, setError] = useState('');
    const [display, setDisplay] = useState(global.display);

    const handleInput = (e) => {
        e.preventDefault();
        if (name === "" || display === "")
            setError("Please fill all the details")
        else {
            setError('');
            global.name = name;
            global.display = display;
            console.log(global.name, global.display);
            setStep(1);
        }
        
    }

    return (
        <div className='multi-form-inner'>
            <strong>Welcome! First things First...</strong>
            <p>You can always change them later</p>
            <form>
                <div className="input-box">
                    <label htmlFor="">Full Name</label>
                    <input type='text' id="full-name" placeholder="Steve Jobs"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="">Display Name</label>
                    <input type='text' placeholder="Steve"
                        value={display}
                        onChange={(e) => setDisplay(e.target.value)}
                        required
                    />
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