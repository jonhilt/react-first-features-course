import React from 'react';

export default class Tweet extends React.Component {
    render() {
        return (
            <div className="card mb-2">
                <p className="card-body">
                    {this.props.text}
                </p>
            </div>
        )
    }
}