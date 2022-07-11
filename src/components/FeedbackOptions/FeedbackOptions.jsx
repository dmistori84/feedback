import { Component } from "react";

export class FeedbackOptions extends Component { 
    //const { good, neutral, bad } = options;
    
    // const shangeValue = ( good, neutral, bad ) => { 
    //     //console.log('this props:', this.props);
    //     console.log('opopop');
    //     console.log(good);
    // }
    
    render() { 
        return (
            <div>
                <button>Good</button>
                <button>Neutral</button>
                <button>Bad</button>
            </div>
        )  
    }
             
    
}