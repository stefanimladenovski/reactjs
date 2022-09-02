import { useState } from "react"

export const Examples = () => {
                         ////EXAMPLE 2
    const[car, setCar] = useState({
        model: "Hyundai",
        year: 2021,
        km: 100000,
    });

    const printObject = (object) => {
        return JSON.stringify(car, null, 2)
    };

    const changeKm = () => {
        setCar({
            ...car,  //prezapisi sve od starata i smeni go samo km: 9999
            km: 9999,
        })
    };

                            //EXAMPLE 1

    const [daysOff, setDaysOff] = useState(['Saturday', 'Sunday']);

    const [newDay, setNewDay] = useState("");

    const addNewDayOff = () => {
        setDaysOff([...daysOff, newDay]);
        setNewDay("")

    };

    return (
        <div>
            <h2>Example 1</h2>
           {printObject(car)}
           <button onClick={() => changeKm()}>
            Change KM to 9999</button>
            <input 
            placeholder="Enter km"
            value={car.km} 
            onChange={(e) => setCar({...car, km: e.target.value})} 
            />
            <br /><hr />

            <h2>Example 2</h2>
            <input 
            type="text" 
            value={newDay} 
            onChange ={((e) => setNewDay(e.target.value))} 
            />
            <button onClick={addNewDayOff}>
            Add Day Off
            </button>

            {daysOff.map((day, i) => <li key={i}> {day} </li> )}

        </div>
    );
};