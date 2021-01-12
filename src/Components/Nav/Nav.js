import React, { PureComponent } from 'react'
import MainButtons from './MainButtons'
import {mainBtnPL, mainBtnEN} from './mainBtnTxt'
import Races from './Races'
import {racesPLtxt, racesENtxt} from './racesBtnTxt.js'
import Weapon from './Weapon'
import {weaponPltxt, weaponENtxt} from './weaponBtnTxt'

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
          races: racesENtxt,
          weapon: weaponENtxt
        })     
    }else{
      this.setState({
        mainBtns: mainBtnPL,
        races: racesPLtxt,
        weapon: weaponPltxt
      })   
    }
  }

  showRaces(){
    if(this.state.weaponVisible === true){
      this.setState({ 
        weaponVisible: false
      });
    }
    
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

  showWeapon(){
    if(this.state.raceVisible === true){
      this.setState({ 
        raceVisible: false
      });
    }
    if(this.state.weaponVisible === false){
      this.setState({ 
        weaponVisible: true
      });
    }else{
      this.setState({ 
        weaponVisible: false
      });
    }
  }

  render() {
    return (
      <>
        <nav>
          <MainButtons btnName={this.state.mainBtns} changeLang={this.changeLang.bind(this)} raceVisible={this.showRaces.bind(this)} weaponVisible={this.showWeapon.bind(this)}/>
          {this.state.raceVisible && <Races btnName={this.state.races}/>}
          {this.state.weaponVisible && <Weapon btnName={this.state.weapon}/>}
        </nav>        
      </>
    )
  }
}

export default Nav
