var React = require("react");
var ReactDOM = require("react-dom");
var LuckyNumber = require('./LuckyNumber');
var Circle = require('./Circle');
var CountDownTimer = require('./CountDownTimer');

class Results extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
                       listItems1:[], 
                       listItems2:[], 
                       listItems3:[], 
                       id:this.props.id,
                       remainingTime : this.props.remainingTime
        };
        
    }
    
    const $this = this;

    propTypes: {
        onComplete: React.PropTypes.func,
        onTimerExpired: React.PropTypes.func
    }

    componentDidMount(){
        
    }


    render() {
        const className = this.props.className;
        return (            
            <div class="statistics">
			    <div className="row row-2">
					<div className="col-md-7">
                        <Circle list={[0]} className="ball-logo" id="ball-logo"/> 
                        <Circle list={["G2"]} className="ball-game" id="ball-game-2" />                                                
                        <Circle list={["G3"]} className="ball-game" id="ball-game-3" />                                                
                        <Circle list={["G4"]} className="ball-game" id="ball-game-4" />                                                
                        <Circle list={["G5"]} className="ball-game" id="ball-game-5" />                                                
					</div>
                    <div className="col-md-3 put-right">
                        <CountDownTimer seconds={ this.state.remainingTime } sceneTime={this.props.sceneTime} onComplete={this.props.onComplete} onTimerExpired={this.props.onTimerExpired}/>                                                                        
					</div>					        
			    </div>
                <div className="row row-3">
                    <div className="col-md-2 results-time">
                        09:30
				    </div>
                    <div className="col-md-9 results-numbers">
                        <div>{[1,2,33,14,5,36,27,8,19,30,21,12,39,40,15,6,17,38,9,24].map((value, i) => <Circle list={[value]} dataBadge={i+1} className="ball-numbers-medium" key={i}/>)} </div>
				    </div>
			    </div>
                <div className="row row-3">
                    <div className="col-md-2 results-time"> 
                        09:25
				    </div>
                    <div className="col-md-9 results-numbers">
                        <div>{16,2,31,14,5,36,28,8,20,30,18,12,39,40,14,6,7,38,9,27].map((value, i) => <Circle list={[value]} dataBadge={i+1} className="ball-numbers-medium" key={i}/>)} </div>
				    </div>
			    </div>
                <div className="row row-3">
                    <div className="col-md-2 results-time">
                        09:20
				    </div>
                   <div className="col-md-9 results-numbers">
                        <div>{[11,2,33,4,25,36,27,8,9,30,21,12,19,40,15,6,17,31,10,24].map((value, i) => <Circle list={[value]} dataBadge={i+1} className="ball-numbers-medium" key={i}/>)} </div>
				    </div>
			    </div>    
            </div> 
        )  
    }
}

module.exports = Results;