import React, { PureComponent } from 'react'
import Button from './Button'

export class MainButtons extends PureComponent {
  render() {
    return (
      <div id='mainButtons'>
        <Button name={this.props.btnName.language} btnClick={this.props.changeLang}/>
        <Button name={this.props.btnName.races} btnClick={this.props.raceVisible}/>
        <Button name={this.props.btnName.weapon} btnClick={this.props.weaponVisible}/>
        <Button name={this.props.btnName.magic}/>
        <Button name={this.props.btnName.legends}/>
      </div>
    )
  }
}

export default MainButtons
