import { useState } from "react"
import { useContext } from "react"
import { FormContext } from "../context/FormContext"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const Address = () => {
    const {global, step, setStep} = useContext(FormContext)
    const [workspace, setWorkspace] = useState(global.workspace);
    const [url, setUrl] = useState(global.url);
    const [error, setError] = useState('');

    const handleInput = (e) => {
        e.preventDefault()
        if (workspace === "" || url === "")
            setError('Please fill all the details')
        else {
            setError('');
            global.workspace = workspace;
            global.url = url;
            console.log(global.workspace, global.url, global.name, global.display)
            setStep(2);
        }
    }


    return (
        <div className='multi-form-inner'>
            <strong>Let's set up a Home for all Your Work</strong>
            <p>You can always create another workspace later</p>
            <form>
                <div className="input-box">
                    <label htmlFor="">Workspace Name</label>
                    <input type='text' id="full-name" placeholder="Eden"
                        value={workspace}
                        onChange={(e) => setWorkspace(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="">Workspace URL <span>(optional)</span></label>
                    <span className='split-input'>
                        <input placeholder="www.eden.com/" disabled="disabled" className="input-disabled" />
                        <input type='text' placeholder="Example"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </span>
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