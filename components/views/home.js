import React from 'react'
import '../../assets/css/home.css'
import axios from 'axios'
import 'swiper/swiper-bundle.min.css'
import '../../assets/css/recommend.css'
import 'swiper/swiper-bundle.min.js'
import Swiper from 'swiper'
import { personalized, banner, getNewSongs } from '../util/axios'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            homeList: [],
            songList: [],
            bannerList:[]
        }
    }
    componentDidMount(){
        axios.all([personalized({ limit: 6 }), banner(), getNewSongs()])
        .then(axios.spread((homeList,bannerList,songList) => {
            if(bannerList.code == 200){
                let banners = bannerList.banners.filter((item,i) => i<4)
                this.setState({
                    bannerList:banners
                },() => {
                    let swiper = new Swiper('.swiper-container', {
                        autoplay: {
                            delay: 2000,
                        },
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination',
                        },
                    });
                }
                )
            }
            if(homeList.code == 200){
                this.setState({
                    homeList: homeList.result
                })
            }
            if (songList.code === 200) {
                console.log(songList.result)
                this.setState({
                    songList: songList.result
                })
            }
        }))
    }
    goList(id) {
        this.props.history.push(`/list?id=${id}`)
    }
    goPlay(id) {
        this.props.history.push(`/play?id=${id}`)
    }
    render() {
        const { homeList,songList,bannerList } = this.state
        return (
            <div className='home'>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            bannerList.map(item => {
                                return <div key={item.imageUrl} className="swiper-slide">
                                    <img className='imgUrl' src={item.imageUrl} alt="" />
                                </div>
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <h1>推荐歌单</h1>
                <ul>
                    {
                        homeList.map(item => {
                            return <li key={item.id} className='homeList' onClick={this.goList.bind(this, item.id)}>
                                <img src={item.picUrl} alt="" />
                                <span>{item.name}</span>
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
                        <b>{item.song.name}{
                            item.song.alias? item.song.alias.map(item => {
                                return <i style={
                                    {
                                        color:'#888'
                                    }
                                }key = {item}>({item})</i>
                            }):''
                        }</b>
                                    {item.song.artists ? item.song.artists.map(item => {
                                       return <i key={item.id}>{item.name}</i> 
                                    }):''
                                }
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