import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        this.setState({
            value: e.target.value
        })
        this.props.onUpdataSearch(e.target.value)
    }
    render(){
        return (
            <input
                onChange={this.onChange}
                className="form-control search-input"
                type="text"
                placeholder="поис по записи"
                width="600px"
                value={this.state.value}
            />
        )
    }
}
export default SearchPanel;