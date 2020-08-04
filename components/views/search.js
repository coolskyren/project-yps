import React from 'react'
import '../../assets/css/search.css'
import { searchHot, searchInfo } from '../util/axios'
class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            searchHotList: [],
            searchList: []
        }
        this.inpVal = React.createRef()
    }
    componentDidMount() {
        this.get_search_hot()
    }
    get_search_hot() {
        searchHot()
            .then(res => {
                if (res.code == 200) {
                    console.log(res, '热门标签')
                    this.setState({
                        searchHotList: res.result.hots
                    })
                }
            })
    }
    goSearch(keywords) {
        //给input赋值
        this.inpVal.current.value = keywords
        //调取搜索接口
        searchInfo({ keywords })
            .then(res => {
                if (res.code == 200) {
                    this.setState({
                        searchList: res.result.songs
                    })
                }
            })
    }
    getInput() {
        console.log(this.inpVal.current.value, 'input内容')
    }
    clearInfo() {
        this.inpVal.current.value = ''
        this.setState({
            searchList: []
        })
    }
    render() {
        // const { songList } = this.state
        const { searchHotList, searchList } = this.state
        let valFlag = ''
        if (this.inpVal.current) {
            valFlag = this.inpVal.current.value
        }
        let hotInfo = <div className="m-hotlist">
            <h3 className="S-hot">热门搜索</h3>
            <ul className="S-list">
                {
                    searchHotList.map((item, i) => {
                        return <li onClick={this.goSearch.bind(this, item.first)} className="S-searchlist" key={item.first}>
                            <a className='link clearfix'>{item.first}</a>
                        </li>
                    })
                }

            </ul>
        </div>
        return (
            <div className='search'>
                <div className = 'S-title'>
                    <i></i>
                    <input type="search" name='search' className='input' ref={this.inpVal} onInput={this.getInput.bind(this)} placeholder = '搜索歌曲歌手歌词'/>
                    {
                    valFlag ? <button onClick={this.clearInfo.bind(this)}>×</button> : <i></i>
                }
                </div>
                <div className ='searchList'>
                    <ul>
                        {
                            searchList.length > 0 ? searchList.map(item => {
                                return <li key={item.id}>{item.name}</li>
                            })
                                : ''
                        }
                    </ul>
                </div>
                <div className="m-default">
                    {
                        searchList.length == 0 ? hotInfo : ''
                    }
                </div>
            </div>
        )
    }
}
export default Search