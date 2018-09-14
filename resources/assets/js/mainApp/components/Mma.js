import React, { Component} from 'react'
import ReactDOM from 'react-dom';

 const Mma = (props) => {

    return (

      <div id="nfl-section">
        <div className="games-section">
          <div className ="title-headers">
              <div className ="game-header">
                <h5>Fighter</h5>
              </div>
              <div className="spread-header">
                <h5>Spread</h5>
              </div>
              <div className ="moneyline-header">
                <h5>MoneyLine</h5>
              </div>
              <div className ="overunder-header">
                <h5>Rounds</h5>
              </div>
            </div>
            {props.gameLoopMma()}
          </div>
      </div>

    )
}
export default Mma;
