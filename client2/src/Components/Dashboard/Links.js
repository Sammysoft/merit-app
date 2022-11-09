import React, { Component } from 'react'
import Home from '../Home'
import swal from '@sweetalert/with-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFileArchive} from '@fortawesome/free-solid-svg-icons'
export default class Links extends Component {
    constructor(props){
      super(props)
      this.state={
        course:'MATHEMATICS'
      }
      
    }
    componentDidMount(){
        window.scrollTo(0, 0)
        swal(
        <div>
         <div class="form-group">
                 <label>Select course</label> 
               <select onChange={(e)=>this.setState({course:e.target.value})} class="custom-select">
                      <option selected value="MATHEMATICS">MATHEMATICS</option>
                      <option value="CHEMISTRY">CHEMISTRY</option>
                      <option value="PHYSICS 101">PHYSICS 101</option>
                      <option value="PHYSICS 107">PHYSICS 107</option>
                    </select>
                </div>
        </div>)
      }
  
    render() {
        return (
            <div onClick={()=> this.props.close()} style={{backgroundColor:'white'}} className="container schedule">
               <Home change={this.setState} course={this.state.course}/>
            </div>
        )
    }
}
