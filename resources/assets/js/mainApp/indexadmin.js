import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import nfldata from './components/data/nfldata.js'
import mlbdata from './components/data/mlbdata.js'
import mmadata from './components/data/mmadata.js'
import NavAdmin from './components/NavAdmin'
import Nfl from './components/Nfl'
import Mlb from './components/Mlb'
import Mma from './components/Mma'
import Gameselected from './components/Gameselected'
import HeaderNfl from './components/HeaderNfl'
import HeaderMlb from './components/HeaderMlb'
import HeaderMma from './components/HeaderMma'
import GradedWagers from './components/GradedWagers'
import PendingWagers from './components/PendingWagers'
import CheckPendingWagers from './components/CheckPendingWagers'
import LoadingComp from './components/LoadingComp'




 class Admin extends Component {
  constructor () {
    super()
    this.state = {
      nfldata:nfldata,
      mlbdata:mlbdata,
      mmadata:mmadata,
      gameSelected:[],


    }
  }

  componentWillMount(){
  const self =this;
  const getInitialData = async function(){
  try{
      const initialData = await axios.get('/api/initialApp')

      self.setState({
        initialData:initialData.data

      }, ()=>{console.log(self.state)})

  }catch (error){
    console.log(error)
  }
}
getInitialData()

    }



// changes gameslected object based on users input of Risk bet in gameSelected.js
  handleBetRisk= (item, win,bet) =>{
      this.setState(state => ({
        gameSelected: state.gameSelected.map(i => {
          if (i === item) {
            return { ...i, wager_win: win, wager_risk:bet};
          } else {
            return i;
          }
        })
      }));
      }

//Loops through the nfl data and displays all games for spread, moneyline, and total.
gameLoopNfl = ()=>{
    return this.state.nfldata.map((item)=>{
      return(
          <div className="games-container" key ={item.ID}>
                <div className="games match-time">
                    <h5>{this.convertTime(item.MatchTime)}</h5>
                </div>
                <div className ="gamelist" >
                    <div className ="games teams">
                        <h5 className="hometeam">{item.AwayTeam}</h5>
                    </div>
                    <h5 className="spread" onClick={(e)=>this.wagersAwaySpread(item)}>{item.Odds[0].PointSpreadAway} ({item.Odds[0].PointSpreadAwayLine})</h5>
                    <h5 className="moneyline" onClick={(e)=>this.wagersAwayMoneyLine(item)}>{item.Odds[0].MoneyLineAway}</h5>
                    <h5 className="total" onClick={(e)=>this.wagersAwayTotalOver(item)}>0 {item.Odds[0].TotalNumber} ( {item.Odds[0].OverLine} )</h5>
                </div>
                <div className ="gamelist" >
                    <div className ="games teams">
                        <h5 className="hometeam">{item.HomeTeam}</h5>
                    </div>
                    <h5 className="spread" onClick={(e)=>this.wagersHomeSpread(item)}>{item.Odds[0].PointSpreadHome} ({item.Odds[0].PointSpreadHomeLine})</h5>
                    <h5 className="moneyline" onClick={(e)=>this.wagersHomeMoneyLine(item)}>{item.Odds[0].MoneyLineHome}</h5>
                    <h5 className="total" onClick={(e)=>this.wagersHomeTotalUnder(item)}>U {item.Odds[0].TotalNumber} ( {item.Odds[0].UnderLine} )</h5>
                </div>

          </div>
      )
    })
}
gameLoopMlb = ()=>{
    return this.state.mlbdata.map((item)=>{
      return(
          <div className="games-container" key ={item.ID}>
                <div className="games match-time">
                    <h5>{this.convertTime(item.MatchTime)}</h5>
                </div>
                <div className ="gamelist" >
                    <div className ="games teams">
                        <h5 className="hometeam">{item.AwayTeam}</h5>
                    </div>
                    <h5 className="spread" onClick={(e)=>this.wagersAwaySpread(item)}>{item.Odds[0].PointSpreadAway} ({item.Odds[0].PointSpreadAwayLine})</h5>
                    <h5 className="moneyline" onClick={(e)=>this.wagersAwayMoneyLine(item)}>{item.Odds[0].MoneyLineAway}</h5>
                    <h5 className="total" onClick={(e)=>this.wagersAwayTotalOver(item)}>0 {item.Odds[0].TotalNumber} ( {item.Odds[0].OverLine} )</h5>
                </div>
                <div className ="gamelist" >
                    <div className ="games teams">
                        <h5 className="hometeam">{item.HomeTeam}</h5>
                    </div>
                    <h5 className="spread" onClick={(e)=>this.wagersHomeSpread(item)}>{item.Odds[0].PointSpreadHome} ({item.Odds[0].PointSpreadHomeLine})</h5>
                    <h5 className="moneyline" onClick={(e)=>this.wagersHomeMoneyLine(item)}>{item.Odds[0].MoneyLineHome}</h5>
                    <h5 className="total" onClick={(e)=>this.wagersHomeTotalUnder(item)}>U {item.Odds[0].TotalNumber} ( {item.Odds[0].UnderLine} )</h5>
                </div>

          </div>
      )
    })
}
gameLoopMma = ()=>{
    return this.state.mmadata.map((item)=>{
      return(
          <div className="games-container" key ={item.ID}>
                <div className="games match-time">
                    <h5>{this.convertTime(item.MatchTime)}</h5>
                </div>
                <div className ="gamelist" >
                    <div className ="games teams">
                        <h5 className="hometeam">{item.AwayTeam}</h5>
                    </div>
                    <h5 className="spread" onClick={(e)=>this.wagersAwaySpread(item)}>{item.Odds[0].PointSpreadAway} ({item.Odds[0].PointSpreadAwayLine})</h5>
                    <h5 className="moneyline" onClick={(e)=>this.wagersAwayMoneyLine(item)}>{item.Odds[0].MoneyLineAway}</h5>
                    <h5 className="total" onClick={(e)=>this.wagersAwayTotalOver(item)}>0 {item.Odds[0].TotalNumber} ( {item.Odds[0].OverLine} )</h5>
                </div>
                <div className ="gamelist" >
                    <div className ="games teams">
                        <h5 className="hometeam">{item.HomeTeam}</h5>
                    </div>
                    <h5 className="spread" onClick={(e)=>this.wagersHomeSpread(item)}>{item.Odds[0].PointSpreadHome} ({item.Odds[0].PointSpreadHomeLine})</h5>
                    <h5 className="moneyline" onClick={(e)=>this.wagersHomeMoneyLine(item)}>{item.Odds[0].MoneyLineHome}</h5>
                    <h5 className="total" onClick={(e)=>this.wagersHomeTotalUnder(item)}>U {item.Odds[0].TotalNumber} ( {item.Odds[0].UnderLine} )</h5>
                </div>

          </div>
      )
    })
}

//converts UTC to PST game time
  convertTime =(convert)=>{
      let date = new Date(convert);
    return date.toLocaleString() // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"
  }

//is called from gameSelected.js which passes in the item to cancel a bet.
  cancelBet =(name)=>{
    this.setState({
       gameSelected: this.state.gameSelected.filter(el => el !== name)
    })
  }

//NFL Home Teams
    wagersHomeSpread = (item)=>{
      let currentWagers = this.state.gameSelected
      let line =item.Odds[0].PointSpreadHome
      let juice =item.Odds[0].PointSpreadHomeLine
      let teamChosen=item.HomeTeam;
      let matchTime=item.MatchTime;

      let currentBet ={
      user_id:this.state.initialData.userInfo.id,
      wager_id:item.ID,
      wager_details:item.Details,
      wager_teamChosen:teamChosen,
      wager_type:"spread",
      wager_juice:juice,
      wager_line:line,
      wager_matchTime:matchTime,
      wager_risk:'',
      wager_win:'',
      wager_result:'pending'

      }
      let allBets = [...currentWagers, currentBet]
        let allUniqueBets = [...new Set(allBets.map(a => a))];
      this.setState({
        gameSelected:allUniqueBets
      })
    }
    wagersHomeMoneyLine = (item)=>{
      let currentWagers = this.state.gameSelected
      let line =item.Odds[0].MoneyLineHome
      let juice =item.Odds[0].MoneyLineHome
      let teamChosen=item.HomeTeam;
      let matchTime=item.MatchTime;
      let currentBet ={
      user_id:this.state.initialData.userInfo.id,
      wager_id:item.ID,
      wager_details:item.Details,
      wager_teamChosen:teamChosen,
      wager_type:"moneyline",
      wager_juice:juice,
      wager_line:line,
      wager_matchTime:matchTime,
      wager_risk:'',
      wager_win:'',
      wager_result:'pending'

      }
      let allBets = [...currentWagers, currentBet]
        let allUniqueBets = [...new Set(allBets.map(a => a))];
      this.setState({
        gameSelected:allUniqueBets
      })
    }
    wagersHomeTotalUnder = (item)=>{
      let currentWagers = this.state.gameSelected
      let line =item.Odds[0].TotalNumber
      let juice =item.Odds[0].UnderLine
      let teamChosen=item.HomeTeam;
      let matchTime=item.MatchTime;;
      let currentBet ={
      user_id:this.state.initialData.userInfo.id,
      wager_id:item.ID,
      wager_details:item.Details,
      wager_teamChosen:teamChosen,
      wager_type:"under",
      wager_juice:juice,
      wager_line:line,
      wager_matchTime:matchTime,
      wager_risk:'',
      wager_win:'',
      wager_result:'pending'

      }
      let allBets = [...currentWagers, currentBet]
        let allUniqueBets = [...new Set(allBets.map(a => a))];
      this.setState({
          gameSelected:allUniqueBets
      })
    }
  // NFL Away teams
  wagersAwaySpread = (item)=>{
    let currentWagers = this.state.gameSelected
    let line =item.Odds[0].PointSpreadAway
    let juice =item.Odds[0].PointSpreadAwayLine
    let teamChosen=item.AwayTeam;
    let matchTime=item.MatchTime;
    let currentBet ={
    user_id:this.state.initialData.userInfo.id,
    wager_id:item.ID,
    wager_details:item.Details,
    wager_teamChosen:teamChosen,
    wager_type:"spread",
    wager_juice:juice,
    wager_line:line,
    wager_matchTime:matchTime,
    wager_risk:'',
    wager_win:'',
    wager_result:'pending'

    }
    let allBets = [...currentWagers, currentBet]
      let allUniqueBets = [...new Set(allBets.map(a => a))];
    this.setState({
      gameSelected:allUniqueBets
    })
  }
  wagersAwayMoneyLine = (item)=>{
      let currentWagers = this.state.gameSelected
    let line =item.Odds[0].MoneyLineAway
    let juice =item.Odds[0].MoneyLineAway
    let teamChosen=item.AwayTeam;
    let matchTime=item.MatchTime;
    let currentBet ={
    user_id:this.state.initialData.userInfo.id,
    wager_id:item.ID,
    wager_details:item.Details,
    wager_teamChosen:teamChosen,
    wager_type:"moneyline",
    wager_juice:juice,
    wager_line:line,
    wager_matchTime:matchTime,
    wager_risk:'',
    wager_win:'',
    wager_result:'pending'

    }
    let allBets = [...currentWagers, currentBet]
      let allUniqueBets = [...new Set(allBets.map(a => a))];
    this.setState({
      gameSelected:allUniqueBets
    })
  }
  wagersAwayTotalOver = (item)=>{
    let currentWagers = this.state.gameSelected
    let line =item.Odds[0].TotalNumber
    let juice =item.Odds[0].OverLine
    let teamChosen=item.AwayTeam;
    let matchTime=item.MatchTime;

    let currentBet ={
    user_id:this.state.initialData.userInfo.id,
    wager_id:item.ID,
    wager_details:item.Details,
    wager_teamChosen:teamChosen,
    wager_type:"over",
    wager_juice:juice,
    wager_line:line,
    wager_matchTime:matchTime,
    wager_risk:'',
    wager_win:'',
    wager_result:'pending'

    }
    let allBets = [...currentWagers, currentBet]
      let allUniqueBets = [...new Set(allBets.map(a => a))];
    this.setState({
      gameSelected:allUniqueBets
    })
  }

  submitForm = async () =>{
    if(confirm('Yes, place my Bets !')){
      try{
        const post = await axios.post('/api/post', {
          wagers:this.state.gameSelected
      })
{this.updateWagers()}

    }catch(error){
        console.log('clicked')
      console.log(error)
    }
  }else{
    console.log('bet canceled')
  }

 }

 updateWagers(){
   console.log('update wagers was clicked')
console.log(this.state.gameSelected)
this.setState({gameSelected:[]})
 }




  render () {
    return (
      <BrowserRouter>
       <div className='app-container home-page'>
        <LoadingComp initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData} />

           <NavAdmin initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData}  />
           <section id="content-container">
           <Switch>
              <Route exact path ="/" component={HeaderNfl} />
              <Route path ="/mlb" component={HeaderMlb} />
              <Route path ="/nfl" component={HeaderNfl} />
              <Route path ="/mma" component={HeaderMma} />
             </Switch>
              <Route
              exact path = '/'
                render ={(props) =><CheckPendingWagers {...props} />} />
              <Route
              path ='/mlb'
              render ={(props) =><Mlb {...props} gameLoopMlb={this.gameLoopMlb}/>} />
              <Route
              path ='/nfl'
              render ={(props) =><Nfl {...props} gameLoopNfl={this.gameLoopNfl}/>} />
              <Route
              path ='/mma'
              render ={(props) =><Mma {...props} gameLoopMma={this.gameLoopMma}/>} />
              <Route
              path ='/graded'
              render ={(props) =><GradedWagers {...props} />} />
              <Route
              path ='/pending'
              render ={(props) =><PendingWagers {...props} />} />
              <Route
              path ='/checkPendingWagers'
              render ={(props) =><CheckPendingWagers {...props} />} />
          </section>
      </div>

      </BrowserRouter>

    )
  }
}
const admin = document.getElementById('admin')

ReactDOM.render(<Admin />, admin)
