import React,{useState} from 'react';
import {filters} from './filters';


const CharacterFilter=({setFilters}) => {
    const [name,setName]=useState("");
    const [species,setSpecies]=useState("");
    const [status,setStatus]=useState("no status");
    const [gender,setGender]=useState("no gender");

    const handleSubmit = (e) => {
        e.preventDefault();
        let arr=[name,species,status,gender];
        // console.log({name,species,status,gender});
        let temp=arr.map((field,index) => {
            let obj;
            obj=filters[index];
            obj.value=undefined;
            if(field!=="" && field!=="no status" && field!=="no gender") obj.value=field;
            return obj;
        })
        // console.log(temp);
        setFilters(temp);

    }

    const deleteFilters=() => {
        setName("");
        setSpecies("");
        setStatus("no status");
        setGender("no gender");
        setFilters([]);
    }

    const handleChange = (e) => {
        const name=e.target.name,value=e.target.value;
        switch(name){
            case 'name':
                setName(value);
                break;
            case 'species':
                setSpecies(value);
                break;
            case 'status':
                setStatus(value);
                break;
            case 'gender':
                setGender(value);
                break;
        }
    }
   
    return(
        <div className="filter-form">
            <form onSubmit={handleSubmit}>
                <div className="name input">
                    <input type="text" name="name" value={name} className="name-input" placeholder="Name" onChange={handleChange} />
                </div>
                <div className="species input">
                    <input type="text" name="species" value={species} className="species-input" placeholder="Species" onChange={handleChange} />
                </div>
                <div className="status input">
                    <select value={status} className="status-select" name="status" onChange={handleChange}>
                        <option value="no status">No Status</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
                <div className="gender input">
                    <select value={gender} className="gender-select" name="gender" onChange={handleChange}>
                        <option value="no gender">No Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
                <div className="submit-btn">
                    <button type="submit">Filter</button>
                </div>
                <div className="delete-filters">
                    <div onClick={deleteFilters}><span className="fas fa-times"></span></div>
                </div>
            </form>
        </div>
    )
    
}

export default CharacterFilter;