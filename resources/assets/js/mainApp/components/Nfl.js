import React, { Component} from 'react'
import ReactDOM from 'react-dom';

 const Nfl = (props) => {

    return (

      <div id="nfl-section">
        <div className="games-section">
          <div className ="title-headers">
              <div className ="game-header">
                <h5>Team</h5>
              </div>
              <div className="spread-header">
                <h5>Spread</h5>
              </div>
              <div className ="moneyline-header">
                <h5>MoneyLine</h5>
              </div>
              <div className ="overunder-header">
                <h5>Total</h5>
              </div>
            </div>
            {props.gameLoopNfl()}
          </div>
      </div>

    )
}
export default Nfl;
