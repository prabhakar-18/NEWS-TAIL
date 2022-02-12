import React, { Component } from 'react';

export class NewsItem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card" >
                    < div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }>
                        <span class="badge rounded-pill bg-danger "  >{source}</span>
                    </div>
                    <img src={!imageUrl ? "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/16BE7/production/_122995139_gettyimages-1271126255.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>

                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;
