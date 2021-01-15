import React from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import logo from '../assets/logo.png';
import GuestListItem from './guestListItem';

function Header(props){

    
    const {handleClose,term,clickList,handleOnchange, focus,filteredData, inputFocusHandle, guest, location} =props
   

   
   
    return(
       
        <div className="header">
        <a href="#" className="header-brand">
            <img src={logo} alt="" />
        </a>
        
        <div className={focus ? "__header__search" : "header__search"}  >
           
            <form action="">
                {focus &&  <FaTimes className="__header__search-close" onClick={handleClose}/>}
       
                <div className={focus ? "__form-group" : "form-group"}>



                    {/* =====================================================================================================================================================*/}
                    <div className={focus ? "__form-group__item  __form-group__item--1" : "form-group__item  form-group__item--1"} > 

                   <div className="input-container">
                        {focus &&  <label className="form-label"> location</label>}

                        <input 
                        value={term}
                        name="location"
                        onChange={(e)=> handleOnchange(e)}
                        onFocus={(e) => inputFocusHandle(e)} 
                        className="form-input--1"
                        type="text"
                        placeholder="Add location" 
                        />
                    </div>

                    <div className="input-container">

                        {focus &&  <label className="form-label">Guests</label>}

                        <input
                        name="guest"
                        onFocus={(e) => inputFocusHandle(e)} 
                        className="form-input--2"
                        type="text" 
                        placeholder="Add guest"
                        />
                    </div>
                     
                        <div className="filterDrawer--1">
                            {location &&  <ul className="location-list">
                            {filteredData.map(item => (
                            <li className="location-list__item" onClick={(e)=>clickList(e)} value={item.location} key={item.id}><ImLocation className="location-list__item-icon"/> {item.location}</li>
                            ))}
                            </ul>
                            }
                            </div>

                        <div className="filterDrawer--2">

                            {guest &&
                            <div className="guest-list" >
                            <GuestListItem label="Adults" helper="Ages 13 or above"/>
                            <GuestListItem label="Childen" helper="Ages 2-12"/>

                            </div>
                            }
                        </div>
                      </div>
              


                             {/* =====================================================================================================================================================*/}
                    <div    className={focus ? "__form-group__item __form-group__item--3" : "form-group__item form-group__item--3"}>
                    <button className={focus ? "btn btn-primary" : "btn" } type="submit" onClick={(e)=> props.sumbitOnClick(e)}>
                     <FaSearch className={focus ? "__search-icon" : "search-icon"}/>
                     {focus && "search"}
                    </button>
                    </div>
                             {/* =====================================================================================================================================================*/}
                </div>
              
            </form>
        </div>

    </div>
    )
}

export default Header