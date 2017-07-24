import React from 'react';

export default class PlayListForm extends React.Component{
    //contructor
    constructor(props){
    super(props);
        this.state = {
            userName: '',
            songArtist: '',
            songTitle: '',
            songNotes: '',
        }; 
    }

    handleChange = key => {
        return (event) => {
            let state = {};
            state[key] = event.target.value
            this.setState (state);
        }
    }

    // Adding to List Function:

    addToList = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
    })
    .then(response => {console.log(response, "yay");})
    .catch(err => {console.log(err, "boo!");});
    
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
    }

//Views
    render(){
        const {userName, songArtist, songNotes, songTitle} = this.state;
        return (
        <div className='col-sm-6'>
            <form onSubmit={this.addToList}>
                <div className="form-group">
                    <label htmlFor="userName">User Name:</label>
                    <input type="text" onChange={this.handleChange('userName')} value={userName} name='userName' className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="songArtist">Artist/Band:</label>
                    <input type="text" onChange={this.handleChange('songArtist')} value={songArtist} name='songArtist' className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="songTitle">Song Title:</label>
                    <input type="text" onChange={this.handleChange('songTitle')} value={songTitle} name='songTitle' className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="songNotes">Notes:</label>
                    <textarea type="text" onChange={this.handleChange('songNotes')} value={songNotes} name='songNotes' className="form-control" rows='5'/>
                </div>
                <input type='submit' className='btn btn-primary' />
            </form>
        </div>
        )
    }
}