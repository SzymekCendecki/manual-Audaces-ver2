import React, { PureComponent } from 'react'
import MainButtons from './MainButtons'
import Races from './Races'
import Weapon from './Weapon'

const racesPLtxt= {
  "human":"człowiek",
  "halforc":"półork",
  "orc":"ork",
  "halfelv":"półelf",
  "elv":"elf",
  "dwarf":"krasnolud",
  "gnome":"gnom",
  "halfling":"niziołek",
  "goblin":"goblin",
  "troll":"trol",
  "semigiant":"półolbrzym"
}

const racesENtxt = {
  "human":"human",
  "halforc":"halforc",
  "orc":"orc",
  "halfelv":"halfelv",
  "elv":"elv",
  "dwarf":"dwarf",
  "gnome":"gnome",
  "halfling":"halfling",
  "goblin":"goblin",
  "troll":"troll",
  "semigiant":"semigiant"
}

export const weaponPltxt = {
  "short":"krótka",
  "oneHand":"jednoręczna",
  "handAndHalf":"półtoraręczna",
  "twoHand":"dwuręczna",
  "distance":"dystansowa",
  "siege":"oblężnicza",
  "special":"specjalna",
  "magic":"magiczna"
}

export const weaponENtxt ={
  "short":"short",
  "oneHand":"one hand",
  "handAndHalf":"hand and half",
  "twoHand":"two hand",
  "distance":"distance",
  "siege":"siege",
  "special":"special",
  "magic":"magic"
}


export class Nav extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { 
      races: racesPLtxt,
      weapon: weaponPltxt
    };

    
  }
  render() {
    return (
      <>
        <nav>
          <MainButtons />
          <Races btnName={this.state.races}/>
          <Weapon btnName={this.state.weapon} />
        </nav>        
      </>
    )
  }
}

export default Nav
