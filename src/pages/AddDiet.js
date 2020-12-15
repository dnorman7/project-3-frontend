import { addDiets,getUser } from '../services/dietService';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

export default function LoginPage(props) {

    const [ formState, setFormState ] = useState({
        userId: props.user._id,
        breakfast: "",
        lunch: "",
        snacks: "",
        dinner:""
    });

    function formValid() {
        return !!(formState.breakfast || formState.lunch||formState.snacks||formState.dinner)
    }

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if(!formValid()) return;
        try {
            await addDiets(formState);
            // calling a helper function defined in App.js to add the user to state
            props.handleDietSubmit();
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <main className="Page">
            <h1>Add Diet</h1>
            <form className="dietForm" onSubmit={handleSubmit} >
            <div className="form-group ">
                <p>Breakfast:</p>

                <div className="inputFlex" >
                    <div className="input">
                    <label htmlFor="breakfast">Meal: </label>
                    <input name="breakfast" type="text" className="form-control" placeholder="2 eggs" value={formState.breakfast} onChange={handleChange} />
                    </div>
                </div>
                 
            </div>

            <div className="form-group">
                <p>Lunch:</p>

                <div className="inputFlex" >
                    <div className="input">
                    <label htmlFor="lunch">Meal: </label>
                    <input name="lunch" type="text" className="form-control" placeholder="caesar salad" value={formState.lunch} onChange={handleChange} />
                    </div>
                </div>
                 
            </div>

            <div className="form-group">
                <p>Snacks:</p>

                <div className="inputFlex" >
                    <div className="input">
                    <label htmlFor="snacks">Meal: </label>
                    <input name="snacks" type="text" className="form-control" placeholder="1 apple" value={formState.snacks} onChange={handleChange} />
                    </div>
                </div>
                 
            </div>

            <div className="form-group">
                <p>Dinner:</p>

                <div className="inputFlex" >
                    <div className="input">
                    <label htmlFor="dinner">Meal: </label>
                    <input name="dinner" type="text" className="form-control" placeholder="6oz steak" value={formState.dinner} onChange={handleChange} />
                    </div>
                </div>
                 
            </div>
          
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <input disabled={!formValid()} type="submit" className="btn btn-default" value="Submit" />
              &nbsp;&nbsp;
            </div>
          </div>
        </form>
        <br/>
        <br/>
        </main>
    );
};