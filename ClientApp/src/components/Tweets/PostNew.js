import React from 'react';

export default class PostNew extends React.Component {

    state = {text: ''};

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const options = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: { 'Content-Type': 'application/json' }
        };
        await fetch('Tweet', options);
        this.props.onPosted();
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <textarea className="form-control" value={this.state.text} onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">
                    Tweet it!
                </button>
            </form>
        )
    }
}