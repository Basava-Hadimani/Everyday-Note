import React, {Component} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/'
import NewNote from "./NewNote";

class Notes extends Component{
    constructor(){
        super();
        this.state = {
            surveyHoverId : false,
            editNote : {
                _id : null,
                title : null,
                body : null
            }
        }
        this.handleEditNote = this.handleEditNote.bind(this);
    }

    componentDidMount() {
        this.props.getNotes();
    }

    handleEditNote({_id, title, body}){
        const editNote = {
            _id,
            title,
            body
        }
        this.setState({editNote});
    }
    getNotes(){
        if(this.props.notes.length > 1){
            return this.props.notes.map((note, index)=>{
                return( <div key={index} className="row" onMouseEnter={()=>this.setState({surveyHoverId : note._id})} onMouseLeave={()=>this.setState({surveyHoverId : false})}>
                        <div className="col s12 m12">
                            <div className={`card blue-grey ${this.state.surveyHoverId=== note._id?'':'darken'}-1`}>
                                <div className="card-content white-text">

                                    <span className="card-title">{note.title}</span>
                                    <p>{note.body}</p>
                                    <div className="card-action">
                                        {(this.state.surveyHoverId === note._id) &&
                                        <div className={'row'} style={{'position' : 'absolute'}}>
                                            <i style={{'cursor' : 'pointer'}} onClick={()=>this.handleEditNote(note)} className="material-icons ">edit</i>
                                            <i style={{'cursor' : 'pointer', 'marginLeft' : '700px'}} onClick={()=>this.props.deleteNote(note._id)} className="material-icons ">delete</i>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div>
                {this.state.editNote._id?
                    <NewNote note={this.state.editNote} history={this.props.history}/>:
                    <div>
                    <div className="row">
                        <div className="col s6" style={{'marginTop' : '10px'}}>
                                <Link to="/notes/new"><i className="material-icons medium">add_circle</i><span style={{'position' : 'absolute', 'margin' : '20px 0px'}}>New Note</span></Link>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col s6 offset-s5" >
                    <u>Previous Notes</u>
                    </div>
                {this.getNotes()}
                    </div>
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return({
        notes : state.notes
    })

}

export default connect(mapStateToProps, actions)(Notes);