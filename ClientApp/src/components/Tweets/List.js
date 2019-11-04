import React from 'react';
import Tweet from './Tweet'
import PostNew from "./PostNew";

export default class List extends React.Component {

    state = {
        tweets: []
    };

    constructor(props){
        super(props);
        this.handleNewTweet = this.handleNewTweet.bind(this);
    }
    
    async componentDidMount() {
        this.fetchData();
    }
    
    async fetchData(){
        const response = await fetch('Tweet');
        const data = await response.json();
        this.setState({tweets: data.tweets});
    }

    async handleNewTweet(){
        this.fetchData();
    }
    
    render() {
        return (
            <>
                <h3>Tweets</h3>
                <PostNew onPosted={this.handleNewTweet}/>
                {this.state.tweets.map(tweet => <Tweet text={tweet}/>)}
            </>
        );
    }
}