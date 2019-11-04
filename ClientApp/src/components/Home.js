import React, {Component} from 'react';
import List from "./Tweets/List";

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <p>Hello World - here are some tweets!</p>               
                <List/>
            </div>
        );
    }
}