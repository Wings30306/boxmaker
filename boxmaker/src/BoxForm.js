import React, { Component } from "react";
import uuid from "uuid/dist/v4"


class BoxForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: "",
            height: "",
            color: ""
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault()
        const newBox = {...this.state, id: uuid()}
        this.props.handleCreate(newBox)
        this.setState({
            width: "",
            height: "",
            color: ""
        })
        
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="height">Height</label>
                    <input 
                        type="number" 
                        name="height" 
                        id="height" 
                        value={this.state.height}
                        onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="width">Width</label>
                    <input 
                        type="number"
                        name="width"
                        id="width"
                        value={this.state.width}
                        onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <input 
                        type="text"
                        name="color"
                        id="color"
                        value={this.state.color}
                        onChange={this.handleChange} />
                </div>
                <button>Create New Box</button>
            </form>
        )
    }
}

export default BoxForm