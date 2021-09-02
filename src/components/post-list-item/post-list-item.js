import React, { Component } from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
    render() {
        const { label, delet, onImportant, onLike, important, like } = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames += ' important'
        }
        if (like) {
            classNames += ' like'
        }
        return (
            <div className={classNames}>
                <span onClick={onLike} className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-centr align-items-centr">
                    <button
                        onClick={onImportant}
                        type="button"
                        className="btn-star btn-sm">
                        <i className="fa fa-star"></i>
                    </button>
                    <button
                        onClick={delet}
                        type="button"
                        className="btn-trash btn-sm delet">
                        &times;
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}