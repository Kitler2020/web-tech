import React, {useEffect} from "react";
import {handleToggleFilter} from "../reducers/product";

const CheckBox = (props) => {

    

    return (
        <div className='contentLeftItem'>
            {props.items.map((item,index) => {
                return (
                    <li className='list-unstyled' key={index}>
                        <input
                            // onChange={handleToggleFilter(item._id)}
                            onChange={()=>{
                              
                                    props.handleToggle(item._id,props.filterBy)

                            
                                
                                props.loadFilteredProducts(props.page,props.limit,props.filters,props.order,props.sortBy)

                               
                            }
                            }
                            //    onChange={(e)=>props.handleToggleFilter(item._id)}
                               value={props.checkBoxChecked.indexOf(item._id === -1)} type='checkbox'
                                // checked={!props.checkBoxChecked.lastIndexOf(item._id)}
                               className='form-check-input'/>
                        <label className='form-check-label'> {` ${item.name}`}</label>
                    </li>
                )
            })}
        </div>
    )
}
export default CheckBox