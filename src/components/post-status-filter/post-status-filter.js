import { Component } from 'react';
import './post-status-filter.css';

class PostStatusFilter extends Component {
    constructor(props) {
        super(props)
        this.buttons = [
            { name: 'all', lable: 'Все' },
            { name: 'like', lable: 'Понравилось' },
        ]
    }

    render() {
        const buttons = this.buttons.map(({ name, lable }) => {
            const activ = this.props.filter === name;
            const clazz = activ ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button onClick={()=>this.props.filterLikePost(name)} id={name} className={`btn ${clazz}`}>{lable}</button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
export default PostStatusFilter;