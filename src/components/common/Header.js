import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props)
        this.headerstyle={
            width:'300px',
            height:"25px",
            outline:'none',
            marginLeft:'300px',
            border:'2px solid #00a1e9',
            borderRadius:'3px',
            paddingLeft:'5px'
        }
        this.state={
            headerContent:'The following is TODO List',
            willDoThing:[],
        }
        this.addDoThing=this.addDoThing.bind(this)
    }
    addDoThing(e){
        if(e.keyCode==13){
          this.state.willDoThing.push(e.target.value)
          //异步
          this.setState({
              willDoTing:this.state.willDoThing
          })
          //同步
          // this.setState((prevState,prop)=>({
          //   willDoTing:prevState
          // }))
          this.props.outputData(this.state.willDoThing);
          e.target.value='';
        }
        
    }

    componentDidMount(){

    }
    render(){
        return (
            <div className='header'>
                <header>{this.state.headerContent}
                        <input onKeyUp={this.addDoThing} style={this.headerstyle} type='text'/>
                </header>
            </div>
        )
    }
}

export default Header
