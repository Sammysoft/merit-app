import React, { Component } from 'react'
import Navbar from '../Home/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import swal from '@sweetalert/with-react';

import {faPlus,faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import Cart from './Cart'
import { Spinner } from 'reactstrap';
export default class EventPage extends Component {
    state={
        counter :0,
        data:{},
        name:'',
        email:'',
        CartContructor: {},
        isSubmited:false
        
    }
      async  componentWillMount(){
        window.scrollTo(0, 0)
       
        this.setState({CartContructor: Cart})
        const {id} = this.props.match.params
      await fetch(`http://192.168.43.164:5000/devapi/v1/getUser/${id}`)
      .then((response)=>response.json())
      .then(resJson => {
       return this.setState({data: resJson})
    
    })
      .catch(err => err.message)
      }
      addToCart(id, item){
          
          this.setState({counter: this.state.counter+1})
         const newCart = new Cart(this.state.CartContructor)
         newCart.addToCart(id, item)
        
         this.setState({CartContructor: newCart})
      }
      reduceByOne(id){
        this.setState({counter: this.state.counter-1})
       const newCart = new Cart(this.state.CartContructor)
       newCart.reduceByOne(id)
       this.setState({CartContructor: newCart})
    }
   async handlePayment(){
      if(!this.state.CartContructor.totalPrice){
        this.setState({isSubmited:false})
        return swal('','Please select some items from the items listed', 'info')
      }
     const makePayment = await fetch('http://192.168.43.164:5000/devapi/v1/makePayment', {
      method:'Post',
      headers:{
          'Content-type':'application/json'
      },
      body: JSON.stringify({
       name:this.state.name,
       email:this.state.email,
       id: this.state.data._id,
       cartItems: this.state.CartContructor.toArray(),
       totalPrice: this.state.CartContructor.totalPrice,
       totalQty : this.state.CartContructor.totalQuantity,
      })

  })
  .then((response)=>response.json())
  .then(resJson => resJson)
  .catch(err => err.message)
  if(makePayment.paymentUrl){
     swal(
                <div style={{overflowX:'hidden'}}>

                   <div>
                    <a href={`${makePayment.paymentUrl}`} className="btn my-4 ml-3 btn-primary"> Click to make payment</a>
                   </div>
                   </div>
     )    
  }
    }
    render() {
        
        return (
            <div className="container-fluid event">
              <Navbar/>
              {
                this.state.data.name ? <div className="row event_row">










                <div className="col-md-10 offset-md-1 offset-sm-0  col-sm-12 event_inner">
                <div className="event_header">
                <h3>{this.state.data.eventSchedule.eventName}</h3> 
              <p className="text-light">Page made by {this.state.data.name}</p> 

                </div>
                <div className='event_header_text '>
                <h4>Thanks for taking the first step to contribute to this event</h4>
                {/* <hr/> */}

               <p className="date__">Event Date : {this.state.data.eventSchedule.eventDate}</p>
               
               <h3>Event Image</h3>
               <div className="row">
                 <div className="col-md-7 card col-sm-12">
                 <img alt="loading..." style={{height:400}} src={this.state.data.eventSchedule.imageUrl} />
                 </div>
                 </div>
                 <hr/>
               
             

                <h3 className="my-4" style={{fontSize:26}}>Here are the materials needed for this event</h3>
                <span data-target="#exampleModalLong" data-toggle="modal"  className="badge cart badge-danger p-2  "> {this.state.counter} <FontAwesomeIcon style={{color:'white', marginLeft:10, height:24, width:24}} icon={faShoppingBag} /></span>
                <hr/>
                </div>
               
                <div style={{fontWeight:'bold'}} className="row">
                    {
                        this.state.data.eventSchedule.items.map((material)=>{
                            return(
                                <div style={{opacity : (material.qty > 0 ? 1: 0.5)}}  className="col-md-3 mt-3 col-sm-6 ev__">
                                  
                                     <div style={{marginTop:0}} className="card" >
                                     <img src={material.item.imgUrl} className="card-img-top img-fluid card__img" alt="..."/>
                                     <div style={{display:'block', padding:20}} className="card-body">
                                       <h5 className="card-title">{material.item.name}</h5>
                                      <p  className="card-text">{material.item.description}</p>
                                      <p  className="card-text">Price for each ₦{material.item.price}</p>
                                              <p  className="card-text">Total price  ₦{material.price}</p>
                  
                                      <p  className="card-text">Quantity needed {material.qty > 0 ? material.qty: 0 +' (all item has been bought)'}</p>
                                      <hr/>
                                              <button style={{fontSize:12}} type='button' onClick={()=>this.addToCart(material.item._id , material.item )}  className="btn btn-primary">
                                              Click to add to items to buy <FontAwesomeIcon icon={faPlus} style={{color:'white'}}/></button>
                                               {/* <span className="badge badge-success ml-1">{this.state.CartContructor.item ?this.state.CartContructor.item.qty:0}</span>  <span onClick={()=> this.setState({counter: this.state.counter-1})} className="badge badge-danger ml-2"><FontAwesomeIcon style={{color:'white'}} icon={faMinus}/></span>  */}
                                     </div>
                                   </div>
                                    
                    
                 </div>
                            )
                        })
                    }
                
   
                    
                </div>


                
               
                
   
                    
              
                <hr/>
                 {/* <form>
                 <div className="mb-3">
                    <label className="text-secondary" htmlFor="validationTextarea">Describe which one of this item you are willing to pay for</label>
                    <textarea onChange={(e)=> this.setState({itemNeeded:e.target.value})} className="form-control" id="validationTextarea" placeholder="Input the materials here" required></textarea>
                    <div className="invalid-feedback">
                    Please describe the item you are paying for
                    </div>
                </div>
                 </form> */}
 










              
              <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
<div className="modal-dialog" role="document">
<div className="modal-content">
  <div className="modal-header">
    <h5 className="modal-title" id="exampleModalLongTitle">Here are the items  you want to buy</h5>
    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div className="modal-body">
  <div style={{fontWeight:'bold'}} className="mt-3 row">
      {
         this.state.CartContructor.item ?
         <React.Fragment>
         {
            this.state.CartContructor.toArray().map((material)=>{
                return(
                    <div key={material.item._id}  className="col-md-6 mt-3 col-sm-2 ev__">
         <div style={{marginTop:0}} className="card" >
       {/* <img src={material.imgUrl} className="card-img-top img-fluid card__img" alt="..."/> */}
       <div style={{display:'block', padding:20}} className="card-body">
         <h5 className="card-title">{material.item.name}</h5>
        
        <p  className="card-text ">Quantity to buy  <span style={{fontSize:13}} className="badge ml-2 badge-secondary text-light">{material.qty}</span></p>
        <p  className="card-text">Total price for this item <span style={{fontSize:13}} className="badge ml-2 badge-secondary text-light"> ₦{material.price}</span>  </p>

        <hr/>
                <button style={{fontSize:12}} type='button' onClick={()=> this.addToCart(material.item._id, material.item)}  className="btn btn-primary">
                    Increase</button>

                    <button style={{fontSize:12}} type='button' onClick={()=> this.reduceByOne(material.item._id)}  className="btn ml-2 btn-primary">
                    Reduce</button>    
       </div>
     </div>
     </div>
                )
            })
        }



         <div className="form _pay">
                 <div className="form-group">
                   <label>Enter name (optional)</label>
                   <input type="text" onChange={(e)=> this.setState({name: e.target.value})} className="form-control" placeholder="Enter your name"/>
                 </div>
                 <div className="form-group">
                   <label>Enter email (optional)</label>
                   <input type="email" onChange={(e)=> this.setState({email: e.target.value})} className="form-control" placeholder="Enter your email"/>
                 </div>
               

                 
          </div>

        </React.Fragment>
    

        

         :<React.Fragment>
             <h4 className="ml-3">No item added yet, please add some items</h4>
         </React.Fragment>
      }
                    
                </div>
  </div>
  <div class="modal-footer d-block">

    <h3 className="my-4">Total price ₦{this.state.CartContructor.totalPrice}</h3>
    <button onClick={()=> this.setState({isSubmited:false})} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    {
        this.state.isSubmited? 
        <button  type="button" class="btn btn-primary" disabled>Please wait.... <Spinner style={{width:24, height:24}} color="white"/></button>
        :
        <button onClick={()=> {
          this.handlePayment()
          this.setState({isSubmited:true})}} type="button" class="btn btn-primary">Proceed to payment</button>
    }
   
  </div>
</div>
</div>
</div>
                 
                </div>
            </div>
             :
             <h3 style={{marginTop:250}}>Loading..... please wait <Spinner style={{color: 'royalblue'}}/></h3>
              }
                
               
            </div>
        )
    }
}
