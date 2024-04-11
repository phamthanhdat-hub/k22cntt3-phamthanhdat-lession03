import React, { Component } from 'react'

 class PTD_ClassComp extends Component {
    constructor(props){
        super(props);
        // tao doi tuong du lieu
        this.state = {
            firstName: "Phạm",
            lastName: "Đạt",
            userName: "K22CNTT3",
        }
    }
    // arrow fumction
    Member = (props)=>{
        return(
            <div className='alert alert-success'>
                <h3> Xin chao: {props.fullName} - Ban da {props.age} tuoi. </h3>

            </div>
        )
    }
    ListMember = ()=>{
        return(
            <>
            <this.Member fullName="Phạm Thành Đạt" age ="19" />
            <this.Member fullName="Phạm Thành" age ="20" />
            <this.Member fullName="Phạm  Đạt" age ="21" />
            <this.Member fullName="Phạm Thành Doanh" age ="22" />
            </>
            
        )
    }
  render() {
    return (
        <div className='alert alert-danger'>
        <h2> Class component Demo</h2>
        <hr/>
        <h3> du lieu trong state</h3>
        <h3>Xin chao: {this.state.firstName} {this.state.lastName}</h3>
        <hr/>
        <h3> du lieu tu props </h3>
        <p>Company: {this.props.company}</p>
        <p>coures: {this. props.course}</p>
        <hr/>
        <this.Member fullName="Phạm Thành Đạt" age="20" />
        <hr/>
        {/*this.ListMember*/}
        <this.ListMember />
      </div>
    )
  }
}
export default PTD_ClassComp