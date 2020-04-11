import React from 'react'
import { FaBars, FaRegWindowClose } from 'react-icons/fa'
const SidebarIcon = ({handleClick, isOpen}) => {
  return <span onClick={handleClick}>
    {isOpen ? <FaBars size={20} /> : <FaBars size={20}/>}
  </span>
}
export default SidebarIcon