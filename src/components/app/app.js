import React, { Component } from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from "../post-list/post-list"
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { label: 'Coing to learn React', important: false, like: false, id: 1 },
                { label: 'That is so good', important: false, like: false, id: 2 },
                { label: 'I need a break', important: false, like: false, id: 3 }
            ],
            term: '',
            filter: 'all'
        };
        this.maxId = 4;
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
        this.onUpdataSearch = this.onUpdataSearch.bind(this)
        this.filterLikePost = this.filterLikePost.bind(this)
    }
    delet = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];
            return {
                data: newArr
            }
        })
    }
    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
    onImportant(id) {
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id);
            const old = data[index];
            const newItem = { ...old, important: !old.important };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }
    onLike(id) {
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id);
            const old = data[index];
            const newItem = { ...old, like: !old.like };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }
    searchPost(items, term){
        if(term.length===0){
            return items
        }
        return items.filter((item)=>{
            return item.label.indexOf(term) > -1
        }) 
    }
    onUpdataSearch(term){
        this.setState({
            term: term
        })
    }
    filterPost(items, filter){
        if(filter==='like'){
            return items.filter((elem)=> elem.like)
        }else{
            return items
        }
    }
    filterLikePost(filter){
        this.setState({
            filter: filter
        })
    }
    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter( elem => elem.like === true).length;
        const all = data.length;
        const viziblPosts = this.filterPost(this.searchPost(data, term), this.state.filter)
        return (
            <div className="app">
                <AppHeader liked={liked} allPosts={all} />
                <div className="search-panel d-flex">
                    <SearchPanel onUpdataSearch={this.onUpdataSearch}/>
                    <PostStatusFilter filter={filter} filterLikePost={this.filterLikePost}/>
                </div>
                <PostList
                    posts={viziblPosts}
                    delet={this.delet}
                    onImportant={this.onImportant}
                    onLike={this.onLike} />
                <PostAddForm onAdd={this.addItem} />
            </div>
        )
    }
}

export default App;
