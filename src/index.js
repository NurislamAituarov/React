import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app/app';

// import reportWebVitals from './reportWebVitals';

// class WhoAmI extends Component  {
//     constructor(props){
//         super(props);
//         this.state = {
//             years:26,
//         }
//         // this.nextYear = this.nextYear.bind(this)
//         this.nextYear = ()=>{
//             this.setState(state=>({
//                 years: ++state.years
//             }))
//         }
//     }
//     // nextYear(){
//     //     console.log(1)
//     //     this.setState(state => ({
//     //         years: ++state.years
//     //     }))
//     // }
//     render(){
//         const {name, surname, link} = this.props;
//         const {years} = this.state
//         return (
//             <>
//                 <button onClick={this.nextYear}>++</button>
//                 <h1>My name is {name}, surname - {surname}, years = {years}</h1>
//                 <a href={link}>My profile</a>
//             </>
//         )
//     }
// }

// // const WhoAmI = (props)=>{
// //     return (
// //         <div>
// //             <h1>My name is {props.name}, surname - {props.surname}</h1>
// //             <a href={props.link}>My profile</a>
// //         </div>
// //     )
// // }

// const All = ()=>{
//     return (
//         <>
//             <WhoAmI name="Nurislam" surname="Aituarov" link="facebook.com"/>
//             <WhoAmI name="Ainur" surname="Ismailova" link="facebook.com"/>
//             <WhoAmI name="Masha" surname="Ivanova" link="facebook.com"/>
//         </>
//     )
// }



const Info = ()=>(
    <div className="infoTitle">
        <h2>Погодное приложение</h2>
        <p>Узнайте погоду в вашем городе</p>
    </div>
)
const Form = props =>(
    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="город"></input>
        <button type="submit">получить погоду</button>
    </form>
)
const Weather = props =>(
    <div className="weather">
        {props.city&&
            <>
                <p>Местополпжение: {props.city}, {props.country}</p>
                <p>Температура: {props.temp}</p>
                <p>Давление: {props.pressure}</p>
                <p>Захаод солнца: {props.sunset}</p>
            </>
        }
    </div>
)

const API_KEY = '27fea4477bdb8c2af91b743f1f6cc1ff'

class All extends Component{
    state = {
        temp: undefined,
        city: undefined,
        coutry: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined
    }

    getWeather = (e)=>{
        e.preventDefault()
        let city = e.target.elements.city.value;
        
        if(city){
            console.log(city)
            
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${API_KEY}`)
            .then((data)=>data.json())
            .then((arr)=>{
                console.log(arr)
                let sunset = arr.sys.sunset;
                let date = new Date();
                date.setTime(sunset);
                let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
                    this.setState({
                    temp: (arr.main.temp-273).toFixed(0),
                    city: arr.name,
                    country: arr.sys.country,
                    pressure: arr.main.pressure,
                    sunset: sunset_date,
                    error:''
                })
            })   
            
        }else{
            alert('Введите название города')
        }
    }
    render(){
        return(
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 info">
                                <Info/>
                            </div>
                            <div className="col-sm-7 form">
                                <Form weatherMethod={this.getWeather}/>
                                <Weather
                                    temp={this.state.temp}
                                    city={this.state.city}
                                    country={this.state.country}
                                    pressure={this.state.pressure}
                                    sunset={this.state.sunset}
                                    error={this.state.error}
                                />
                            </div>
                        </div>
                    </div>
                </div>                    
            </div>
        )
    }
}
ReactDOM.render(<All/>, document.getElementById('root'));


// reportWebVitals();
