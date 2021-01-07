import React, { PureComponent } from 'react'
import Button from './Button'

export class Weapon extends PureComponent {
  render() {
    return (
      <div id='weapon'>
        <Button name={this.props.btnName.short}/>
        <Button name={this.props.btnName.oneHand}/>
        <Button name={this.props.btnName.handAndHalf}/>
        <Button name={this.props.btnName.twoHand}/>
        <Button name={this.props.btnName.distance}/>
        <Button name={this.props.btnName.siege}/>
        <Button name={this.props.btnName.special}/>
        <Button name={this.props.btnName.magic}/>
      </div>
    )
  }
}

export default Weapon
