import React from 'react'
import '../../assets/css/rank.css'
import { getHotList } from '../util/axios'
class Rank extends React.Component {
    constructor() {
        super()
        this.state = {
            bgImg:require('../../assets/img/bg_2x.jpg'),
            songList: [],
            time:0
        }
    }
    componentDidMount(){
        this.gethotlist()
    }
    forTime(timer){
        let date = new Date(timer)
        //年份
        let year = date.getFullYear()
        let month = (date.getMonth() + 1 + '').padStart(2, '0')
        //天数
        let day = (date.getDate() + '').padStart(2, '0')
        //小时
        let hours = (date.getHours() + '').padStart(2, '0')
        //分钟
        let minutes = (date.getMinutes() + '').padStart(2, '0')
        //秒数
        let seconds = (date.getSeconds() + '').padStart(2, '0')
        return `${month}月${day}日`
    }
    gethotlist() {
        getHotList()
            .then(res => {
                if (res.code == 200) {
                    //对返回列表进行过滤
                    console.log(res)
                    let songList = res.playlist.tracks.filter((item, i) => i < 20)
                    this.setState({
                        time: res.playlist.updateTime,
                        songList
                    })
                }
            })
    }
    goPlay(id) {
        this.props.history.push({
            pathname: '/play',
            state: {
                id
            }
        })
    }
    render() {
        const { songList,time } = this.state
        return (
            <div className='home'>
                <div className = 'bg'>
                    <div className = 'bgImg'></div>
                    <div className = 'time'>{this.forTime(time)}</div>
                </div>
                <ul>
                    {
                        songList.map((item,i) => {
                            return <li key={item.id} className='songlist' onClick={this.goPlay.bind(this, item.al.id)}>{
                                i<3?<i style={
                                    {
                                       color: 'red'
                                    }
                                }>{i < 9 ? '0' + (i + 1) : (i + 1)}</i>:
                                <i style={
                                    {
                                       color: '#888'
                                    }
                                }>{i < 9 ? '0' + (i + 1) : (i + 1)}</i>
                            }
                                
                                <div className = 'list'>
                                <p>
                                    <b>{item.name}</b>
                            <i>{item.ar[0].name}-{item.al.name}</i>
                                </p>
                                <span></span>
                                </div>
                            </li>
                        })
                    }
                </ul>
                
            </div>
        )
    }
}
export default Rank