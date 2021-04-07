import React, { Component } from "react";
import BoxForm from "./BoxForm";
import Box from "./Box";


class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: []
        }

        this.create=this.create.bind(this)
    }

    create(newBox){
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }

    remove(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }

    render(){
        return (
            <div>
                <h1>Box Maker</h1>
                <BoxForm handleCreate={this.create}/>
                {this.state.boxes.map(box => 
                    <Box 
                        key={box.id}
                        id={box.id}
                        width={box.width}
                        height={box.height}
                        color={box.color} 
                        removeBox={() => this.remove(box.id)}
                    />)}
            </div>
        )
    }
}

export default BoxList