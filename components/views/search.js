import React from 'react'
import '../../assets/css/search.css'
class Search extends React.Component {
    constructor() {
        super()
        this.state = {
           
        }
    }
    render() {
        // const { songList } = this.state
        return (
            <div className='search'>
                <div className = 'S-title'>
                    <i></i>
                    <input type="text" placeholder = '搜索歌曲歌手歌词'/>
                    <i></i>
                </div>
            </div>
        )
    }
}
export default Search