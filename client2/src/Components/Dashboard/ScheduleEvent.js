import React, { Component } from 'react'
import swal from '@sweetalert/with-react'
import {
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import axios from 'axios'
import {Spinner} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBirthdayCake,faBaby, faPlus,faMinus, faCalendar,faArrowLeft, faCalendarPlus,faUserGraduate, faWindowClose,faArrowRight, faUserCheck,  faRing} from '@fortawesome/free-solid-svg-icons'
import Home from '../Home';
export default class ScheduleEvent extends Component {
    constructor(props){
        super(props);
        this.state={
          time:0,
          course:'MATHEMATICS',
          page:1,
          changeScreen:false,
          
           
        }
    }
 Submit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/setup', {
      time:this.state.time,
      course:this.state.course
    })
    .then(res=>{
      if(res.data.set_complete){
        return swal('Setup complete', 'Students can now begin exam', 'success')
      }
        
      
    })
 }
    render() {
    
        return (
            <div onClick={()=> this.props.close()} style={{backgroundColor:'white'}} className="container schedule exam">
            
             <form onSubmit={this.Submit} className="exam_form">
             <h4 className="mb-4">Setup test or exam</h4>
             <hr/>
                <div class="form-group">
                 <label>Select course</label> 
               <select onChange={(e)=>this.setState({course:e.target.value})} class="custom-select">
                      <option value="MATHEMATICS">MATHEMATICS</option>
                      <option value="CHEMISTRY">CHEMISTRY</option>
                      <option value="PHYSICS 101">PHYSICS 101</option>
                      <option value="PHYSICS 107">PHYSICS 107</option>
                    </select>
                </div>
                <div class="form-group my-4">
                  <label for="exampleInputPassword1">Enter time for exam (in minutes)</label>
                  <input onChange={(e)=>this.setState({time:e.target.value})} type="number" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-primary">Setup </button>
              </form>
            </div>
            
        )
    }
}
