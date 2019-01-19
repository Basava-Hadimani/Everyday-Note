import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../actions/'


class NewNote extends Component{
    constructor(props){
        super(props);
        this.state = {
            title : this.props.note?this.props.note.title:null,
            body : this.props.note?this.props.note.body:null
        }
        // this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.currentTarget;
        this.setState({
            [target.id] : target.value
        })
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <p className={'red-text'}>Title</p>
                                <input id="title" type="text" value={this.state.title} className="validate" onChange={(event)=>this.handleChange(event)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <div className="col s12">
                                <p className={'red-text'}>Description</p>
                                <textarea id="body" style={{"resize" :" none", 'height' : '180px'}} value={this.state.body} name="name" cols="40" rows="num" onChange={(event)=>this.handleChange(event)}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={"/"}>
                <button  className="btn waves-effect  waves-light" type="submit" name="action">Cancel
                    <i className="material-icons right">cancel</i>
                </button>
                </Link>
                <Link to={'/'}>
                <button onClick={()=> {
                    if(this.props.note){
                        this.props.editNote(this.state, this.props.note._id, this.props.history);
                    }else {
                        this.props.saveNote(this.state, this.props.history)
                    }
                }
                } className="btn waves-effect right waves-light" type="submit" name="action">Save
                    <i className="material-icons right">send</i>
                </button>
                </Link>
            </div>
        )
    }
}

export default connect(null, actions)(NewNote);