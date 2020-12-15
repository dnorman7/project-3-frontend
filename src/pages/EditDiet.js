import { editDiet,getDiet } from '../services/dietService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';

export default function LoginPage(props) {

    const [ formState, setFormState ] = useState({
        userId: "",
        breakfast: "",
        lunch: "",
        snacks: "",
        dinner:""
    });
    const params = useParams();

    useEffect(() => {
        const id = params.id;
        getDiet(id).then((res)=>{
            console.log(res)
            setFormState(res);
        })
       
    }, []);

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
            await editDiet(formState);
            // calling a helper function defined in App.js to add the user to state
            props.handleDietSubmit();
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <main className="Page">
            <h1>Edit Diet</h1>
            <form className="dietForm" onSubmit={handleSubmit} >
            <div className="form-group ">
                <p>Breakfast:</p>

                <div className="inputFlex" >
                    <div className="input">
                    <label htmlFor="breakfast">Meal: </label>
                    <input name="breakfast" type="text" className="form-control" placeholder="Apple 1 Piece" value={formState.breakfast} onChange={handleChange} />
                    </div>
                </div>
                 
            </div>

            <div className="form-group">
                <p>Lunch:</p>

                <div className="inputFlex" >
                    <div className="input">
                    <label htmlFor="lunch">Meal: </label>
                    <input name="lunch" type="text" className="form-control" placeholder="Apple 1 Piece" value={formState.lunch} onChange={handleChange} />
                    </div>
                </div>
                 
            </div>

            <div className="form-group">
                <p>Snacks:</p>

                <div className="inputFlex" >
                    <div className="input">
                    <label htmlFor="snacks">Meal: </label>
                    <input name="snacks" type="text" className="form-control" placeholder="Apple 1 Piece" value={formState.snacks} onChange={handleChange} />
                    </div>
                </div>
                 
            </div>

            <div className="form-group">
                <p>Dinner:</p>

                <div className="inputFlex" >
                    <div className="input">
                    <label htmlFor="dinner">Meal: </label>
                    <input name="dinner" type="text" className="form-control" placeholder="Apple 1 Piece" value={formState.dinner} onChange={handleChange} />
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