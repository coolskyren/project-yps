import React from 'react'
import qs from 'querystring'
import '../../assets/css/play.css'
class Play extends React.Component {
    constructor(){
        super()
        this.state = {
            songList:[
                {
                    id:1,
                    img:require('../../assets/img/1.jpg'),
                    url:require('../../assets/music/1.m4a'),
                    play:require('../../assets/img/bofang.jpg'),
                    flag:true,
                    name:'致我们将要逝去的青春'
                },
                {
                    id:2,
                    img:require('../../assets/img/2.jpg'),
                    url:require('../../assets/music/1.m4a'),
                    play:require('../../assets/img/bofang.jpg'),
                    flag:true,
                    name:'如果我是海'
                },
                {
                    id:3,
                    img:require('../../assets/img/3.jpg'),
                    url:require('../../assets/music/1.m4a'),
                    play:require('../../assets/img/bofang.jpg'),
                    flag:true,
                    name:'祝我快乐'
                },
                {
                    id:4,
                    img:require('../../assets/img/4.jpg'),
                    url:require('../../assets/music/1.m4a'),
                    play:require('../../assets/img/bofang.jpg'),
                    flag:true,
                    name:'星星之火'
                },
                {
                    id:5,
                    img:require('../../assets/img/5.jpg'),
                    url:require('../../assets/music/1.m4a'),
                    play:require('../../assets/img/bofang.jpg'),
                    flag:true,
                    name:'晚来天御雪'
                },
                {
                    id:6,
                    img:require('../../assets/img/6.jpg'),
                    url:require('../../assets/music/1.m4a'),
                    play:require('../../assets/img/bofang.jpg'),
                    flag:true,
                    name:'睹物思人'
                },
            ]
        }
        this.audio = React.createRef()
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