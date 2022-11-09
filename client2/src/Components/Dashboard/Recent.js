import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

  import swal from '@sweetalert/with-react'
  import {
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import {  faListAlt,faTrash} from '@fortawesome/free-solid-svg-icons'

export default class Recent extends Component {

  
    render() {
        return (
            <div onClick={()=> this.props.close()} style={{backgroundColor:'white'}} className="container schedule recent">
           
         
            </div>
        )
    }
}
