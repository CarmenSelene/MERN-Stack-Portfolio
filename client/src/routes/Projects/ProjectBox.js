import React from 'react';
import BooksAPIBrief from "../Projects/ProjectBrief/BooksAPIBrief";
import MatchGameBrief from "../Projects/ProjectBrief/MatchGameBrief";
import GiphyAPIBrief from "../Projects/ProjectBrief/GiphyAPIBrief";
import ProjectsNavBar from "../../components/ProjectsNavBar/ProjectsNavBar"
import FoodBrief from './ProjectBrief/FoodBrief';
import ETASBrief from './ProjectBrief/ETASBrief';
import TransferBrief from './ProjectBrief/TransferBrief';

export default class ProjectBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            whichBrief: "books"
        };
        this.viewBooksBrief = this.viewBooksBrief.bind(this);
        this.viewGiphyBrief = this.viewGiphyBrief.bind(this);
        this.viewMatchBrief = this.viewMatchBrief.bind(this);
        this.viewTransferBrief = this.viewTransferBrief.bind(this);
        this.viewETASBrief = this.viewETASBrief.bind(this);
        this.viewFoodBrief = this.viewFoodBrief.bind(this);

    };

    viewBooksBrief = () => {
        this.setState({ whichBrief: "books" });
    };

    viewGiphyBrief = () => {
        this.setState({ whichBrief: "giphy" });
    };

    viewMatchBrief = () => {
        this.setState({ whichBrief: "match" });
    };

    viewTransferBrief = () => {
        this.setState({ whichBrief: "transfer" });
    };

    viewETASBrief = () => {
        this.setState({ whichBrief: "etas" });
    };

    viewFoodBrief = () => {
        this.setState({ whichBrief: "food" });
    };

    conditionalRenderPanel = () => {
        if (this.state.whichBrief === "books") {
            return (<div className="wrapper">
                <ProjectsNavBar viewBooksBrief={() => this.viewBooksBrief()} viewGiphyBrief={() => this.viewGiphyBrief()} viewMatchBrief={() => this.viewMatchBrief()} viewTransferBrief={() => this.viewTransferBrief()} viewETASBrief={() => this.viewETASBrief()} viewFoodBrief={() => this.viewFoodBrief()} />
                <BooksAPIBrief /></div>);
        } else if (this.state.whichBrief === "giphy") {
            return (<div className="wrapper">
                <ProjectsNavBar viewBooksBrief={() => this.viewBooksBrief()} viewGiphyBrief={() => this.viewGiphyBrief()} viewMatchBrief={() => this.viewMatchBrief()} viewTransferBrief={() => this.viewTransferBrief()} viewETASBrief={() => this.viewETASBrief()} viewFoodBrief={() => this.viewFoodBrief()} />
                <GiphyAPIBrief /></div>);
        } else if (this.state.whichBrief === "match") {
            return (<div className="wrapper">
                <ProjectsNavBar viewBooksBrief={() => this.viewBooksBrief()} viewGiphyBrief={() => this.viewGiphyBrief()} viewMatchBrief={() => this.viewMatchBrief()} viewTransferBrief={() => this.viewTransferBrief()} viewETASBrief={() => this.viewETASBrief()} viewFoodBrief={() => this.viewFoodBrief()} />
                <MatchGameBrief /></div>);
        } else if (this.state.whichBrief === "transfer") {
            return (<div className="wrapper">
                <ProjectsNavBar viewBooksBrief={() => this.viewBooksBrief()} viewGiphyBrief={() => this.viewGiphyBrief()} viewMatchBrief={() => this.viewMatchBrief()} viewTransferBrief={() => this.viewTransferBrief()} viewETASBrief={() => this.viewETASBrief()} viewFoodBrief={() => this.viewFoodBrief()} />
                <TransferBrief /></div>);
        } else if (this.state.whichBrief === "etas") {
            return (<div className="wrapper">
                <ProjectsNavBar viewBooksBrief={() => this.viewBooksBrief()} viewGiphyBrief={() => this.viewGiphyBrief()} viewMatchBrief={() => this.viewMatchBrief()} viewTransferBrief={() => this.viewTransferBrief()} viewETASBrief={() => this.viewETASBrief()} viewFoodBrief={() => this.viewFoodBrief()} />
                <ETASBrief /></div>);
        } else if (this.state.whichBrief === "food") {
            return (<div className="wrapper">
                <ProjectsNavBar viewBooksBrief={() => this.viewBooksBrief()} viewGiphyBrief={() => this.viewGiphyBrief()} viewMatchBrief={() => this.viewMatchBrief()} viewTransferBrief={() => this.viewTransferBrief()} viewETASBrief={() => this.viewETASBrief()} viewFoodBrief={() => this.viewFoodBrief()} />
                <FoodBrief /></div>);
        }
    }

    render() {
        return (this.conditionalRenderPanel())
    }
}