import React from 'react';
import BooksAPIBrief from "../Projects/ProjectBrief/BooksAPIBrief";
import MatchGameBrief from "../Projects/ProjectBrief/MatchGameBrief";
import GiphyAPIBrief from "../Projects/ProjectBrief/GiphyAPIBrief";
import ProjectsNavBar from "../../components/ProjectsNavBar/ProjectsNavBar"

export default class ProjectBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            whichBrief: "books"
        };
        this.viewBooksBrief = this.viewBooksBrief.bind(this);
        this.viewGiphyBrief = this.viewGiphyBrief.bind(this);
        this.viewMatchBrief = this.viewMatchBrief.bind(this);
    };

    viewBooksBrief = () => {
        this.setState({whichBrief: "books"});
    };

    viewGiphyBrief = () => {
        this.setState({whichBrief: "giphy"});
    };

    viewMatchBrief = () => {
        this.setState({whichBrief: "match"});
    };

    conditionalRenderPanel = () => {
        if (this.state.whichBrief === "books") {
            return (<div className="wrapper mb-4"><ProjectsNavBar viewBooksBrief={() => this.viewBooksBrief()} viewGiphyBrief={() => this.viewGiphyBrief()} viewMatchBrief={() => this.viewMatchBrief()}/>
                <BooksAPIBrief /></div>);
        } else if (this.state.whichBrief === "giphy") {
            return (<div className="wrapper mb-4"><ProjectsNavBar viewBooksBrief={() => this.viewBooksBrief()} viewGiphyBrief={() => this.viewGiphyBrief()} viewMatchBrief={() => this.viewMatchBrief()}/>
                <GiphyAPIBrief /></div>);
        } else if (this.state.whichBrief === "match") {
            return (<div className="wrapper mb-4"><ProjectsNavBar viewBooksBrief={() => this.viewBooksBrief()} viewGiphyBrief={() => this.viewGiphyBrief()} viewMatchBrief={() => this.viewMatchBrief()}/>
                <MatchGameBrief /></div>);
        }
    }

    render() {
        return (this.conditionalRenderPanel())
    }
}