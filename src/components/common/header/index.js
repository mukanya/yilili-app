import React from 'react'
import './header.css';
import GridViewIcon from '@mui/icons-material/GridView';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';
import { Link } from "react-router-dom";

function Header () {
  return (
            <div className='header'>
              <div className='header-menu'>
                  <GridViewIcon />
                </div>
                <div className='header-leftFold'>
                  <label className='header-label'>YiLiLi!</label>
                </div>
                <div className='header-rightFold'>
                  <div className='header-search'>
                    <SearchIcon />
                    <input placeholder='Search' />
                  </div>
              <div className='header-profile'>
                <div className='header-options'>
                <MoreHorizIcon />
                </div>
                <div>
                  <nav>
                    <Link to="lesson">Lesson</Link>
                  </nav>
                </div>
                <div className='header-avatar' >
                    < FaceTwoToneIcon />
                </div>
                  {/* <img className="header-avatar" 
                     src="./data/images/icons8-circled-user-male-skin-type-6.gif" /> */}


                    
                </div>
              </div>
            </div>
  )
}

export default Header;