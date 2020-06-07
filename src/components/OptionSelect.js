
import React, {useEffect} from "react";
import {handleToggleFilter} from "../reducers/product";

const OptionSelect = (props) => {

    return (
        <div className='contentLeftItem'>
           
            <select  onChange={(e)=>{
                props.handleChange(e.target.value)
                
                props.loadFilteredProducts(props.page,props.limit,props.filters,props.order,props.sortBy)
                    }}
                >
                {props.options.map(option=>{
                    return (
                        <option value={option.value} >{option.name} </option>
                    )
                })}
                </select>
            
        </div>
    )
}
export default OptionSelect
