import React from 'react'
import { browserHistory } from 'react-router'

class Broadcast extends React.Component {
    constructor (props){
        super (props)
        this.state={
            smallImgList:this.props.imgList,//要展示的下方的小图片列表
            bigImg:'',      //展示的大图,值是图片的地址
            displayImgIndex:0  //当前展示的图片在小图列表中的下标。
        }
    }

    componentDidMount(){
        this.showBigImg(this.state.displayImgIndex)
    }

    //翻页操作
    turnPage(type){
        var index;
        if(type == 'nextPage'){

            index = this.state.displayImgIndex + 1 > 4 ? 0 : this.state.displayImgIndex + 1;//判断最后一页，调到第一页
        
        }else{

            index = this.state.displayImgIndex - 1 < 0 ? 4 : this.state.displayImgIndex - 1;//判断第一页调到最后一页
        
        }
        
        this.setState({displayImgIndex:index},(prevState,prop)=>{

            this.showBigImg(this.state.displayImgIndex)

        })
    }
    
    showBigImg(index){
        var imgindex = this.state.smallImgList[index]
        this.setState({
            bigImg:imgindex.url
        })
    }

    render (){
        var bigImg = this.state.bigImg;
        return (
            <div className='broadcast'>
                <div className="bigshowcontainer">
                    <img src={this.state.bigImg}/>
                </div>

                <div className="smallimglist">
                    <div className="left" onClick={this.turnPage.bind(this,'prevPage')}>prevPage</div>
                        <ul>
                            {
                                this.state.smallImgList.map((item,index) => {
                                   return(
                                    bigImg == item.url ? <li  className="border" key={item.id}><img src={item.url}/></li> : <li key={item.id}><img src={item.url}/></li>
                                    
                                   ) 
                                })
                            }
                        </ul>
                    <div className="right" onClick={this.turnPage.bind(this,'nextPage')}>nextPage</div>
                </div>
            </div>
        )
    }
}

export default Broadcast
