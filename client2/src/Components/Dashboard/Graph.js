import React, {Component} from 'react'
import axios from 'axios'
import { Bar,Line,Pie, Polar } from '../../../node_modules/react-chartjs-2'
export default class Graph extends Component  {
   constructor(props){
       super(props);
       this.state={
           data:[]
       }
   }

   componentDidMount(){
    this.makeTime= setInterval(()=>{
       axios.get('http://localhost:3001/dash').then(res=>{

        const labels=[]
        const data=[]
      //   const backgroundColors=[]
        let userdata = res.data.user_data
       
        for(let i=0; i<userdata.length; i++){
         data.push(userdata[i].score)
         labels.push(userdata[i].name)
        }
        this.setState({
            data:{
              labels:labels,
              datasets:[
                  {
                      label:"Students score analysis representation",
                      data:data,
                      backgroundColor:[
                          "rgba(255,99,132,0.6)",
                          'rgba(54,162,235,0.6)',
                          'rgba(255,206,86,0.6)',
                          'rgba(75,192,192,0.6)',
                          'rgba(153,102,255,0.6)',
                          'rgba(255,159,64,0.6)',
                          'rgba(255,190,132,0.6)',
                          // 'skyblue',
                          // 'cyan',
                          // 'blue',
                          // 'springgreen',
                          // 'purple',
                          "rgba(255,99,192,0.6)",
                          'rgba(54,162,205,0.6)',
                          'rgba(255,206,100,0.6)',
                          'rgba(75,192,0,0.6)',
                          'rgba(153,102,204,0.6)',
                          'rgba(255,159,89,0.6)',
                          'rgba(255,102,200,0.6)',
                          "rgba(255,99,192,0.6)",
                          'rgba(54,122,25,0.6)',
                          'rgba(255,56,100,0.6)',
                          'rgba(75,18,200,0.6)',
                          'rgba(153,190,204,0.6)',
                          'rgba(255,20,33,0.6)',
                          'rgba(0,102,200,0.6)',
  
      
                      ],
                      borderWidth:1,
                      borderColor:'#777',
                      hoverBorderWidth:3,
                      hoverBorderColor:'#000'
                  }
      
              ]
            }
        })




       } ).catch(err=> {throw err})
    },
    14000)

}
componentWillUnmount(){
   clearInterval(this.makeTime)
}
//   componentDidMount(){

      
//   }
        
render(){
    
    return (
        <div className="container">
            <div className="row dd">

          
            <div className="col-md-12" style={{height:'80vh', width:600}}>
            <Bar
            data={this.state.data}
            options={{
               maintainAspectRatio:false,
               title:{
                   display:true,
                   text:"Statistical representaion of the student score rate in bar  chart",
                   fontSize:'14'
               },
               legend:{
                   display:true,
                   position:'top',
                
               }

            }}
            />
            </div>


            <div className="col-md-12" style={{height:'70vh', marginTop:40}}>
             
            <Pie
            data={this.state.data}
            options={{
               maintainAspectRatio:false,
               title:{
                   display:true,
                   text:"Statistical representaion of the student score rate in pie  chart",
                   fontSize:'14'
               },
               legend:{
                   display:true,
                   position:'top',
                
               }

            }}
            />
            </div>
           
           

           
            </div>
            






            <div className="row dd">

          
            <div className="col-md-12" style={{height:'70vh', width:600, marginTop:70}}>
            
            <Polar
            data={this.state.data}
            options={{
               maintainAspectRatio:false,
               title:{
                   display:true,
                   text:"Statistical representaion of the student score rate in a polar  chart",
                   fontSize:'14'
               },
               legend:{
                   display:true,
                   position:'top',
                
               }

            }}
            />
            </div>


            <div className="col-md-12" style={{height:'70vh', width:600,  marginTop:70}}>
           
            <Line
            data={this.state.data}
            options={{
               maintainAspectRatio:false,
               title:{
                   display:true,
                   text:"Statistical representaion of the student score rate in line graph",
                   fontSize:'14'
               },
               legend:{
                   display:true,
                   position:'top',
                
               }

            }}
            />
            </div>
           
           

           
            </div>
            
        </div>
    )
}

    
}


