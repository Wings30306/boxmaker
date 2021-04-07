import React, { Component } from "react";


class Box extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        let {color, height, width} = this.props;
        return (
            <div>
            <div 
                key={this.props.id}
                style={{backgroundColor: color, height: `${height}em`, width: `${width}em`}}>
                Box
            </div>
            <button onClick={this.props.removeBox}>X</button> 
            </div>
        )
    }
}

export default Box