import React , {useState} from 'react';

import { RecipeProps} from '../../store/interfaces';
/* Router*/
import {NavLink} from 'react-router-dom';


/**ICON */
import {FaAlignJustify, FaUtensilSpoon   } from 'react-icons/fa';


const  Navbar: React.FunctionComponent<RecipeProps> = (props) =>  {
 
 const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
        <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
             
            <FaUtensilSpoon className="logo"/>
             <span>Cooking-chef</span>
 
            <button 
            type='button' 
            className='nav-btn'
           onClick={()=>setIsOpen(!isOpen)}
            >
                <FaAlignJustify className='nav-icon' />
            </button>
            </div>
            <ul 
            className={isOpen ? `nav-links show-nav`: `nav-links`}
            >
                <NavLink to='/'
                onClick={()=>setIsOpen(!isOpen)}>
                <li> Recipes</li>
                </NavLink>
                
                {props.favourites.length > 0 &&
                (<NavLink to='/favourites'
                onClick={()=>setIsOpen(!isOpen)}>
                <li> favourites
                <span className="badge">{props.favourites.length}</span>
                </li>
                </NavLink>
                )
                }
              
               
                </ul>
            </div>   
        </nav>
    </header>
    )
}
export default  Navbar;