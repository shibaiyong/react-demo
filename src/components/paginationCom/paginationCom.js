import React from 'react'
import PageCom from '../common/Pagination'
import {getWeather} from '../api/require'
class PaginationCom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dataLen:100,
            eachPageShow:10,
            showButtonNum:5
        }
    }
    getWeather15(){
        getWeather().then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
    componentDidMount(){
        console.log('获取天气接口调用')
        this.getWeather15()
    }
    render(){
        return(
            <div className="paginationcontainer">
                <PageCom dataLength={this.state.dataLen} eachPageShow={this.state.eachPageShow} showButtonNum={this.state.showButtonNum}/>
            </div>
        )
    }
}

export default PaginationCom