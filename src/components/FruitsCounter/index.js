// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangosCount: 0,
    bananaCount: 0,
  }

  onMangoButton = () => {
    this.setState(prevMangoCount => ({
      mangosCount: prevMangoCount.mangosCount + 1,
    }))
  }

  onBananaButton = () => {
    this.setState(prevBananaCount => ({
      bananaCount: prevBananaCount.bananaCount + 1,
    }))
  }

  render() {
    const {mangosCount, bananaCount} = this.state

    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="heading">
            Bob ate
            <span className="count">{mangosCount}</span> mangoes{' '}
            <span className="count">{bananaCount} bananas</span>
          </h1>
          <div className="itemContainer">
            <div className="item">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div className="buttonContainer">
                <button
                  type="button"
                  className="button"
                  onClick={this.onMangoButton}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="item">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div className="buttonContainer">
                <button
                  type="button"
                  className="button"
                  onClick={this.onBananaButton}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
