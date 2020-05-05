import React, { Component } from 'react'
import GitHubButton from 'react-github-btn'
import capture1 from './images/InGameCaptures/capture1.png'
import capture2 from './images/InGameCaptures/capture2.png'
import capture3 from './images/InGameCaptures/capture3.png'
import capture4 from './images/InGameCaptures/capture4.png'

const blockStyle = {
    marginTop: '10%'
}

const captureStyle = {
    width : '100%',
    padding : '2%'
}

export class GameDev extends Component {
    render() {
        return (
            <div className="modal fade" id="gameDevDetail" tabIndex="-1" role="dialog" aria-labelledby="gameDevDetailLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="gameDevDetailLabel">Detective Storyline GameDev</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <h5 style={blockStyle}>General Vision</h5>
                        <p>Player (as the detective) try to solve crime scenes by hearing stories, collecting evidences and making judgements. This game is meant to submerge the player in crime scenes and encourage them to think carefully and connect evidences to find the criminal.</p>
                        <h5 style={blockStyle}>Current Progress</h5>
                        <p>Finished the first level</p>
                        <h5 style={blockStyle}>Systems Implemented</h5>
                        <p>Global Mouseclick Handling System</p>
                        <p>NPC AI System</p>
                        <p>Inventory System</p>
                        <h5 style={blockStyle}>In Game Captures</h5>
                        <img src={capture1} style = {captureStyle} alt='gamecap1'></img>
                        <img src={capture2} style = {captureStyle} alt='gamecap2'></img>
                        <img src={capture3} style = {captureStyle} alt='gamecap3'></img>
                        <img src={capture4} style = {captureStyle} alt='gamecap4'></img>
                        <h5 style={blockStyle}>Resources Used from Unity Asset Store</h5>
                        <p>Polygon SciFi City Pack --by Synty Studio</p>
                        <p>Everyday motion pack --by Gizmozman</p>
                        <p>Villager animations pack --by Kevin Iglesias</p>
                        <p>Quick Outline --by Chris Nolet</p>
                        </div>
                        <div className="modal-footer">
                            <GitHubButton href="https://github.com/yiw679/Detective-Storyline-GameDev/" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Use this template yiw679/Detective-Storyline-GameDev on GitHub">Github Repo</GitHubButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameDev
