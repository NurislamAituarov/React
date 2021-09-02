import PostListItem from '../post-list-item/post-list-item'
import './post-list.css'

const PostList = ({ posts, delet, onImportant, onLike }) => {
    const elements = posts.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                <PostListItem
                    label={item.label}
                    important={item.important}
                    like={item.like}
                    delet={() => delet(item.id)}
                    onImportant={() => onImportant(item.id)}
                    onLike={() => onLike(item.id)} />
            </li>
        )
    })
    return (
        <ul className="app-list-group">
            {elements}
        </ul>
    )
}
export default PostList;