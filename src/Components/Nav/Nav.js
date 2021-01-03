import React, { PureComponent } from 'react'
import Button from './Button'

export class Nav extends PureComponent {
  render() {
    return (
      <>
        <nav>
            <Button name='en'/>
            <Button name='rasy' />
            <Button name='broń' />
            <Button name='magia' />
            <Button name='legendy' />
        </nav>        
      </>
    )
  }
}

export default Nav
