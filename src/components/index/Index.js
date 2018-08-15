import React from 'react'
import { browserHistory } from 'react-router'

import Header from '../common/Header.js'
import Body from '../common/Body.js'
import Footer from '../common/Footer.js'

class IndexCom extends React.Component {
    constructor (props){
        super (props)
        this.state={
            middleData:[]
        },
        this.transmitData = this.transmitData.bind(this)
    }
    transmitData (data){
        this.setState({
            middleData:data
        })
    }
    linkTo(){
        browserHistory.push({pathname:'/list',query:{id:'',name:''}})
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
                <div className='btn1' onClick={this.linkTo.bind(this)} style={backAndTextColor}>
                    前往列表页
                </div>
            </div>
        )
    }
}

export default IndexCom
