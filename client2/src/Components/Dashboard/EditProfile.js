import React, { Component } from 'react'
import {Spinner} from 'reactstrap'
import swal from '@sweetalert/with-react'
export default class EditProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            phone:'',
            bankName:'',
            accountNumber:'',
            saving:false,
            oldpass:"",
            newpass:""


        }
    }
    componentDidMount(){
        window.scrollTo(0, 0)
        
      }
  
    
    render() {
        return (
            <div onClick={()=> this.props.close()} style={{backgroundColor:'white'}} className="container schedule">
              
            </div>
        )
    }
}
