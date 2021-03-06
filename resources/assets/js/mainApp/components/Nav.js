import React, { Component} from 'react'
import ReactDOM from 'react-dom';
import { NavLink, Link } from 'react-router-dom'



export default class Nav extends Component {
  constructor () {
    super()
    this.state = {
      dropdown:false
    }
  }
  clickedDropDown = () =>{
this.setState({
  dropdown:!this.state.dropdown
})
}

  render () {

      if(this.props.initialData.userInfo == undefined){
      return (<div>  <a href = "/login">Please re-login</a></div>)
    }else{
      const {first_name, last_name} = this.props.initialData.userInfo
    return (

      <section id="left-menu">
          <div className ="balance">Balance: $3,245.56</div>
          <div className="account-dropdown" >
            <div className="logo"><i className="fab fa-typo3" /></div>
            <div className="name" onClick={this.clickedDropDown}>{`${first_name} ${last_name}`}</div>

            <div className="icon" onClick={this.clickedDropDown}>
             <i className="fas fa-chevron-down" />
            </div>
           <div className ={`dropdown ${this.state.dropdown ? 'active' :''}`}>
             <nav>
            <NavLink to="/pending" activeClassName="selected">Pending Wagers </NavLink>
            <NavLink to="/graded" activeClassName="selected">Graded Wagers </NavLink>
            <a href = "/logout">logout</a>
             </nav>
           </div>
          </div>
        <section className = "nav-container">
          <div className="nav-links"><NavLink to="/mlb" activeClassName="selected">Baseball </NavLink></div>
          <div className="nav-links disabled"><NavLink to="/nba" activeClassName="selected">BasketBall </NavLink></div>
          <div className="nav-links disabled"><NavLink to="/boxing" activeClassName="selected disabled">Boxing </NavLink></div>
          <div className="nav-links"><NavLink to="/nfl" activeClassName="selected">Nfl </NavLink></div>
          <div className="nav-links disabled"><NavLink to="/hockey" activeClassName="selected">Hockey </NavLink></div>
          <div className="nav-links disabled"><NavLink to="/soccer" activeClassName="selected">Soccer </NavLink></div>
          <div className="nav-links disabled"><NavLink to="/tennis" activeClassName="selected">Tennis </NavLink></div>
          <div className="nav-links"><NavLink to="/mma" activeClassName="selected">UFC/MMA </NavLink></div>
      </section>
      </section>)
  }
}
}
