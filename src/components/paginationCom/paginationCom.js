import React from 'react'
import PageCom from '../common/Pagination'
class PaginationCom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dataLen:100,
            eachPageShow:10,
            showButtonNum:5
        }
    }
    componentDidMount(){

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