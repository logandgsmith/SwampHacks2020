import React from 'react';
import './JobCard.css';

class CardHeader extends React.Component {
    render() {
        const { image, site } = this.props;
        var style = {
            backgroundImage: 'url(' + image + ')'
        };
        return (
            <header style={style} className="cardHeader">
                <h4 className="cardSite">{site}</h4>
            </header>
        )
    }
}

class CardBody extends React.Component {
    render() {
        return (
            <div className="cardBody">
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

class JobCard extends React.Component {
    render() {
        return (
            <div className="cardWhole">
                <article>
                    <CardHeader site={this.props.site} image={this.props.image} />
                    <CardBody title={this.props.title} text={this.props.text} />
                </article>
            </div>
        );
    }
}

export default JobCard;