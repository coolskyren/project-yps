import React from 'react'
import '../../assets/css/index.css'
import Home from '../views/home'
import Rank from '../views/rank'
import Search from '../views/search'
import {Switch,Router,Redirect,Navlink} from 'react-router-dom'
class Index extends React.Component {
    render() {
        return (
            <div className='index'>
                <div className='title'>
                    <span className='tName'>优音乐</span>
                </div>
            </div>
        )
    }
}
export default Index