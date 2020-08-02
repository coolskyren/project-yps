import React from 'react'
import '../../assets/css/rank.css'
class Rank extends React.Component {
    constructor() {
        super()
        this.state = {
            bgImg:require('../../assets/img/bg_2x.jpg'),
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
    goPlay(id) {
        this.props.history.push({
            pathname: '/play',
            state: {
                id
            }
        })
    }
    render() {
        const { songList } = this.state
        return (
            <div className='home'>
                <div className = 'bg'>
                    <div className = 'bgImg'></div>
                    <div className = 'time'>更新日期：07月30日</div>
                </div>
                <ul>
                    {
                        songList.map(item => {
                            return <li key={item.id} className='songlist' onClick={this.goPlay.bind(this, item.id)}>
                                <i>{`0`+item.id}</i>
                                <div className = 'list'>
                                <p>
                                    <b>{item.name}</b>
                                    <i>--{item.songname}</i>
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