import React, { PureComponent } from 'react'
import MainButtons from './MainButtons'
import Races from './Races'
import Weapon from './Weapon'

const mainBtnPL = {
  "language":"EN",
  "races":"rasy",
  "weapon":"broń",
  "magic":"magia",
  "legends":"legendy"
}

const mainBtnEN ={
  "language":"PL",
  "races":"races",
  "weapon":"weapon",
  "magic":"magic",
  "legends":"legends"
}

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

const weaponPltxt = {
  "short":"krótka",
  "oneHand":"jednoręczna",
  "handAndHalf":"półtoraręczna",
  "twoHand":"dwuręczna",
  "distance":"dystansowa",
  "siege":"oblężnicza",
  "special":"specjalna",
  "magic":"magiczna"
}

 const weaponENtxt ={
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
      mainBtns: mainBtnPL,
      races: racesPLtxt,
      weapon: weaponPltxt,
      raceVisible: false,
      weaponVisible: false
    };    
  }

  changeLang(){
    if(this.state.mainBtns === mainBtnPL){
        this.setState({
          mainBtns: mainBtnEN,
          races: racesENtxt
        })     
    }else{
      this.setState({
        mainBtns: mainBtnPL,
        races: racesPLtxt
      })   
    }
  }

  showRaces(){
    if(this.state.raceVisible === false){
      this.setState({ 
        raceVisible: true
      });
    }else{
      this.setState({ 
        raceVisible: false
      });
    }
  }



  render() {
    return (
      <>
        <nav>
          <MainButtons btnName={this.state.mainBtns} changeLang={this.changeLang.bind(this)} raceVisible={this.showRaces.bind(this)}/>
          {this.state.raceVisible && <Races btnName={this.state.races}/>}
          {this.state.weaponVisible && <Weapon btnName={this.state.weapon}/>}
        </nav>        
      </>
    )
  }
}

export default Nav
