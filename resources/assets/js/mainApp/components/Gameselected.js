import React, { Component} from 'react'
import ReactDOM from 'react-dom';
import _ from 'lodash'


export default class Gameselected extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  //passes the item to parent container method to filter/cancel a bet when user clicks the cancel icon
cancelBet = (item)=>{
  this.props.cancelBet(item)
}
// Takes in the bet amount and passes the newly calculated risk & win amount to the parent method, to update the state of gameselected with it.
handleBetRisk = (e,item) =>{
    let bet=e.target.value
    if(item.wager_juice<0){
      let calcBet =(bet)=>{
          let newAmount = (100/item.wager_juice)*bet;
          return newAmount
      }
        let win = calcBet(bet)
        win = Math.round(win * 100) / 100
        win = Math.abs(win)
        this.props.handleBetRisk(item,win,bet)
    }else{
      let calcBet =(bet)=>{
          let newAmount = (item.wager_juice*.01)*bet;
          return newAmount
      }
        let win = calcBet(bet)
        win = Math.round(win * 100) / 100
        this.props.handleBetRisk(item,win,bet)
    }
}

// displays/renders all bets the user has selected to bet on
displaySelectedBets=()=>{
    if(this.props.gameSelected != null){
      let games = this.props.gameSelected;

  return games.map((item,i)=>{
    return(
      <div className="game-selected-container" key ={i} >
          <div className="close-btn" onClick={()=>this.cancelBet(item)}>
                 <img src = "./img/x.svg" />
          </div>
          <div className="bet-container">
              <div className="bet-chosen">
                    <span className="teamChozen">{item.wager_teamChosen}  {(item.wager_line>0 && item.wager_type==='moneyline' || item.line>0 && item.wager_type==='spread' ? '+ '+ item.wager_line : item.wager_line)} </span>
                  <span className="wager-type">{item.wager_type}</span>
              </div>
              <span className="wager-type">{(item.wage_type==='moneyline' ? '': item.wager_juice)}</span>
          </div>
          <div className="match-container">
            <span className="game">{item.wager_details}</span>
            <span className="match-time">{this.props.convertTime(item.wager_matchTime)}</span>
          </div>
          <div className="wager-amount">
            <div className="group-risk">
              <input type="number" name="risk" value={item.wager_risk} onChange={(e)=>this.handleBetRisk(e,item)}/>
              <span>Risk</span>
            </div>
            <div className="group-winbox">
                <h5>{item.wager_win}</h5>
               <span>Win</span>
            </div>
          </div>
      </div>
    )
  })

}else{
  console.log('heyyyyy')
}
}
//Updates the toal amount the user is wanting to wager on the current betslip
totalMoneyRisked = ()=>{
  var s = _.reduce(this.props.gameSelected, function(s, entry) {
      return s + parseFloat(entry.wager_risk);
  }, 0);
    s = Math.abs(Math.round(s * 100) / 100)
  return s;
}
//Updates the toal amount the user can win based on total bets on the current betslip
totalMoneyWinPossible = ()=>{
  var s = _.reduce(this.props.gameSelected, function(s, entry) {
      return s + parseFloat(entry.wager_win);
  }, 0);
  s = Math.abs(Math.round(s * 100) / 100)

  return s;
}

  render () {
    return (
      <div id ="game-selected" >
        <h1>Bet Slip</h1>
        {this.displaySelectedBets()}
        <div className="wager-confirmation-container">
          <div className="confirmation-group bets">
            <h5>Total Bets:</h5>
            <h5>{this.props.gameSelected.length}</h5>
          </div>
          <div className="confirmation-group bet-risk">
              <h5>Total Stake:</h5>
              <h5> {isNaN(this.totalMoneyRisked()) ?' Fill-in bet':'$'+ this.totalMoneyRisked()}</h5>
          </div>
          <div className="confirmation-group bet-win">
              <h5>Possible Winnings</h5>
              <h5> {isNaN(this.totalMoneyWinPossible()) ?'':'$'+ this.totalMoneyWinPossible()}</h5>
          </div>
          <button type="text" onClick={this.props.submitForm}>Place Wager</button>
        </div>
      </div>)
  }
}
