import React from 'react'

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
    render (){
        return (
            <div className='index'>
                <Header outputData={this.transmitData}/>
                <Body Things={this.state.middleData}/>
                <Footer />
            </div>
        )
    }
}

<<<<<<< HEAD
export default IndexCom
=======
export default Index
>>>>>>> 42ef54ca3d29952917e4f8e65f0a3bf69f01a6aa
