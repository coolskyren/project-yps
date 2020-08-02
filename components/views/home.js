import React from 'react'
import '../../assets/css/home.css'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            homeList: [
                {
                    id: 1,
                    homeName: '2020上半年最受欢迎日语新歌',
                    img: require('../../assets/img/1.jpg')
                },
                {
                    id: 2,
                    homeName: '2020上半年最受欢迎日语新歌',
                    img: require('../../assets/img/2.jpg')
                },
                {
                    id: 3,
                    homeName: '2020上半年最受欢迎日语新歌',
                    img: require('../../assets/img/3.jpg')
                },
                {
                    id: 4,
                    homeName: '2020上半年最受欢迎日语新歌',
                    img: require('../../assets/img/4.jpg')
                },
                {
                    id: 5,
                    homeName: '2020上半年最受欢迎日语新歌',
                    img: require('../../assets/img/5.jpg')
                },
                {
                    id: 6,
                    homeName: '2020上半年最受欢迎日语新歌',
                    img: require('../../assets/img/6.jpg')
                },

            ],
            songList: [
                {
                    id: 1,
                    name: '致我们将要逝去的青春',
                    songname: '张靓颖'
                },
                {
                    id: 2,
                    name: '如果我是海',
                    songname: '李荣浩'
                },
                {
                    id: 3,
                    name: '祝我快乐',
                    songname: '汪苏泷'
                },
                {
                    id: 4,
                    name: '星星之火',
                    songname: '罗云熙'
                },
                {
                    id: 5,
                    name: '晚来天御雪',
                    songname: '恋恋故人难'
                },
                {
                    id: 6,
                    name: '睹物思人',
                    songname: '武艺'
                },
            ]
        }
    }
    goList(id) {
        this.props.history.push(`/list?id=${id}`)
    }
    goPlay(id) {
        this.props.history.push(`/play?id=${id}`)
    }
    render() {
        const { homeList,songList } = this.state
        return (
            <div className='home'>
                <h1>推荐歌单</h1>
                <ul>
                    {
                        homeList.map(item => {
                            return <li key={item.id} className='homeList' onClick={this.goList.bind(this, item.id)}>
                                <img src={item.img} alt="" />
                                <span>{item.homeName}</span>
                            </li>
                        })
                    }
                </ul>
                <h1>最新音乐</h1>
                <ul>
                    {
                        songList.map(item => {
                            return <li key={item.id} className='songlist' onClick={this.goPlay.bind(this, item.id)}>
                                <p>
                                    <b>{item.name}</b>
                                    <i>--{item.songname}</i>
                                </p>
                                <span></span>
                            </li>
                        })
                    }
                </ul>
                
            </div>
        )
    }
}
export default Home