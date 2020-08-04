import React from 'react'
import qs from 'querystring'
import '../../assets/css/play.css'
import { checkInfo } from '../util/axios'
class Play extends React.Component {
    constructor(){
        super()
        this.state = {
            songList:[]
        }
        this.audio = React.createRef()
    }
    componentDidMount(){

    }
    
    goPlay(){
        this.audio.current.play()
        this.setState({
            flag:false
        })
    }
    goPause(){
        this.audio.current.pause()
        this.setState({
           flag:true
        })
    }
    goBack(){
        this.props.history.push(`/index`)
    }
    render() {
        const {songList,flag} = this.state
        let queryStr = this.props.location.search.slice(1)
        let obj = qs.parse(queryStr)
        let id = obj.id - 1
        return (
            <div className = 'play'>
                <h1>{songList[id].name}</h1>
                <audio ref = {this.audio} src = {songList[id].url} autoplay="autoplay"></audio>
                <div className = 'icon'>
                    <img onClick={this.goPause.bind(this)} src={songList[id].img} alt=""/>
                    {
                    flag?<img onClick={this.goPlay.bind(this)} className = 'bofang' src={songList[id].play} alt=""/> : ''
                    }
                </div>
                <button onClick = {this.goBack.bind(this)}>返回首页</button>
            </div>
        )
    }
}
export default Play