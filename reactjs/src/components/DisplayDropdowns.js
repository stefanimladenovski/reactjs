import { Dropdown } from "../components/Dropdown";
import {useState} from "react";
import { socials } from "../mockData";
import { people } from "../mockData";

export const DisplayDropdowns = () => {

    const [social, setSocial] = useState("")
    const [person, setPerson] = useState("")
    
    return (
        <div>
        <Dropdown 
        label="Choose social:"
        elements={socials} 
        onChangeDropdown = {setSocial} 
        />
  
        <Dropdown 
        label = "Choose person:"
        elements={people} 
        onChangeDropdown = {setPerson} 
        />
  
        <p>selected social: {social} </p>
        <p>selected person: {person} </p>
      </div>
    )
}