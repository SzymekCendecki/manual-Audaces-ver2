import React, { PureComponent } from 'react'
import Button from './Button'

export class Races extends PureComponent {
  render() {
    return (
      <div id='races'>
        <Button name={this.props.btnName.human}/>
        <Button name={this.props.btnName.halforc}/>
        <Button name={this.props.btnName.orc}/>
        <Button name={this.props.btnName.halfelv}/>
        <Button name={this.props.btnName.elv}/>
        <Button name={this.props.btnName.dwarf}/>
        <Button name={this.props.btnName.gnome}/>
        <Button name={this.props.btnName.halfling}/>
        <Button name={this.props.btnName.goblin}/>
        <Button name={this.props.btnName.troll}/>
        <Button name={this.props.btnName.semigiant}/>
      </div>
    )
  }
}


export default Races
