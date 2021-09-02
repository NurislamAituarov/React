import './app-header.css';
const AppHeader = (props)=>{
    
    return (
        <div className="app-header d-flex">
            <h1>Nurislam Aituarov</h1>
            <h2> {props.allPosts} записей, из них понравилось {props.liked}</h2>
        </div>
    )
}
export default AppHeader;