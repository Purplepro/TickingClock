import React, {Component } from 'react';
import '../Clock/clock.css';


class Clock extends Component {
    constructor(props) {
    super(props);
    this.state = {
        time: new Date().toLocaleTimeString()
    }
    }


    componentDidMount() {
        //setting the interval
    this.intervalID = setInterval(() =>  
    //updating each second
    this.updateClock(),
    1000
    
    );}

    componentWillUnmount() {
        clearInterval(this.intervalID)
        //this clears the interval
    }

    updateClock(){
     
    }

   

    handleChangeButton() {
        this.setState({
            time: new Date().toLocaleDateString()
        })
        console.log('button is clicked')
    }


    render() {
        return (
            <div className="Time">
                <p>{this.state.time}</p>
                <form >
                    <button type="submit" onClick={() => {this.handleChangeButton()}}>Date</button>
                </form>
            </div>
        );}


}



export default Clock;