import React from 'react'
import '../../assets/css/index.css'
import Home from '../views/home'
import Rank from '../views/rank'
import Search from '../views/search'
import {Switch,Route,Redirect,NavLink} from 'react-router-dom'
class Index extends React.Component {
    render() {
        return (
            <div className='index'>
                <div className='title'>
                    <span className='tName'><i></i> 网易云音乐</span>
                    <button>下载APP</button>
                </div>
                <div className = 'tabBar'>
                    <NavLink activeClassName = 'select' to = '/index/home'><i>音乐推荐</i></NavLink>
                    <NavLink activeClassName = 'select' to = '/index/rank'><i>热歌榜</i></NavLink>
                    <NavLink activeClassName = 'select' to = '/index/search'><i>热门搜索</i></NavLink>
                </div>
                <Switch>
                    <Route path = '/index/home' component = {Home}></Route>
                    <Route path = '/index/rank' component = {Rank}></Route>
                    <Route path = '/index/search' component = {Search}></Route>
                    <Redirect to = '/index/home'></Redirect>
                </Switch>
            </div>
        )
    }
}
export default Index