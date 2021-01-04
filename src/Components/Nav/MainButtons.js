import React, { PureComponent } from 'react'
import Button from './Button'

export class MainButtons extends PureComponent {
  render() {
    return (
      <div id='mainButtons'>
        <Button name='en'/>
        <Button name='rasy' />
        <Button name='broń' />
        <Button name='magia' />
        <Button name='legendy' />
      </div>
    )
  }
}

export default MainButtons
