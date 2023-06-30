import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export const HeaderPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <React.Fragment>
       <div className = "header"> 
          <div className = {'header__logo'}> 
            <div>
            <Link to={'/'}>Frogist</Link>
            </div>
          </div> 
          <div className = {'header__menu'}> 
            <div>
              <Link to={'/aboutus'}>О нас</Link> 
            </div> 
            <div> 
              <Link to={'/menu'}>Меню</Link> 
            </div> 
            <div> 
              <Link to={'/cofe'}>О кофе</Link> 
            </div> 
            <div> 
              <Link to={'/howdrink'}>Как правильно пить кофе</Link> 
            </div>
          </div>
        </div>
    </React.Fragment>
    )
}