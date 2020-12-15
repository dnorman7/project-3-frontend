import { getDiets, deleteDiet } from '../services/dietService';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DietPage(props) {

var today = new Date();
var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear()

    const [ dietState, setDietState ] = useState([{
        createdAt:"",
        breakfast:"",
        lunch:"",
        snack:"",
        dinner:"",
    },]);

    useEffect(() => {
        getDiets(props.user).then((res)=>{
            console.log(res)
            setDietState(res);
        })
    }, []);

    function handleDietDelete (diet){
        deleteDiet(diet)
        window.location.href = "/diets"
    }

    const dietItems = dietState.map((diet) =>

        <div key={diet._id} className="dietCard">
            <p>Date: {date}</p>
            <p>Entry: </p>
            <div className="entry">
                Breakfast:
                <br/>
                    <p>{diet.breakfast}</p>
                Lunch:
                <br/>
                <ul>
                    <p>{diet.lunch}</p>
                </ul>
                Snacks:
                <br/>
                <ul>
                    <p>{diet.snack}</p>
                </ul>
                Dinner:
                <br/>
                <ul>
                    <p>{diet.dinner}</p>
                </ul>
            </div>
            <button className="edit"><Link to={'/editdiet/'+diet._id}>Edit</Link></button>
            <button className="delete" onClick={()=>{handleDietDelete(diet)}}>Delete</button>
        </div>
  );

    return (
        <main className="dietPage">
            <h2>Food Entries</h2>
            <br/>
            <button className="add"><Link to='/adddiet'>Add entry</Link></button>
            <br/>
            <div className="diets">
                {dietItems}
            </div>
        </main>
    );
};