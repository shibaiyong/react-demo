import React from 'react'
import { browserHistory } from 'react-router'

import Header from '../common/Header.js'
import Body from '../common/Body.js'
import Footer from '../common/Footer.js'
import Broadcast from '../common/Broadcast'

class IndexCom extends React.Component {
    constructor (props){
        super (props)
        this.state={
            middleData:[],
            imgList:[
                {id:1,url:'/src/static/img/1.png'},
                {id:2,url:'/src/static/img/2.png'},
                {id:3,url:'/src/static/img/3.png'},
                {id:4,url:'/src/static/img/4.png'},
                {id:5,url:'/src/static/img/5.png'},
                {id:6,url:'/src/static/img/2.png'},
                {id:7,url:'/src/static/img/3.png'},
                {id:8,url:'/src/static/img/4.png'}
            ]
        },
        this.transmitData = this.transmitData.bind(this)
    }
    transmitData (data){
        this.setState({
            middleData:data
        })
    }
    linkTo(route,data){
        browserHistory.push({pathname:route,query:{id:'',name:''}})
    }
    render (){
        
        let backAndTextColor = {
            backgroundColor:'red',
            color:'white',
            fontSize:40
        };
        return (
            <div className='index'>
                <Header outputData={this.transmitData}/>
                <Body Things={this.state.middleData}/>
                <Footer/>
                <div className='btn1' onClick={this.linkTo.bind(this,'/list')} style={backAndTextColor}>
                    前往列表页
                </div>
                <Broadcast imgList={this.state.imgList}/>
            </div>
        )
    }
}

export default IndexCom
