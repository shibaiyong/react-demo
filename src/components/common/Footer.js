import React from 'react'

class Footer extends React.Component {
    constructor (props){
        super (props)
        this.state={
            footerContent:'This is Footer'
        }
    }

    render (){
        return (
            <div className='footer'>
                { this.state.footerContent }
            </div>
        )
    }
}

export default Footer