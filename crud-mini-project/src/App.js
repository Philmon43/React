import React from "react";
import Axios from "./Component/Axios";
import Contetnt from "./Component/Contetnt/Contetnt";
import "./app.css";

class App extends React.Component{
  state = { data: [], optVal: "post", fname:"", lname: "", age: null, email: "", country: "", id: null}
  modalRef = React.createRef()
    
  async componentDidMount(){
    const {data} = await Axios.get("users")
    this.setState({data});
  }

  hideModal = () => {
    this.modalRef.current.classList.add("hidden")
  }
  showModal = () => {
    this.modalRef.current.classList.remove("hidden")
  }

  postNewItem = async () => {
    await Axios.post("/users", {
      firstName: this.state.fname,
      lastName: this.state.lname,
      country: this.state.country,
      email: this.state.email,
      age: this.state.age,
    })
  }

  updateItem = async () => {
    await Axios.put("/users/"+this.state.id, {
      firstName: this.state.fname,
      lastName: this.state.lname,
      country: this.state.country,
      email: this.state.email,
      age: this.state.age,
    })
  }

  deletItem = async () => {
    await Axios.delete("users/"+this.state.id)
  }

  handleSubmit =  () => {
    // eslint-disable-next-line default-case
    switch(this.state.optVal){
      case "post":
        this.postNewItem()
        break
      case "put":
        this.updateItem()
        break
        case "delete":
        this.deletItem()
        break
    }
    this.hideModal()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  setModalType = () => {
    let type = this.state.optVal
    if(type==="post"){
      return  <div className="box">
                <select name="optVal" onChange={this.handleChange}>
                  <option value="post">Add</option>
                  <option value="delete">Delete</option>
                  <option value="put">Update</option>
                </select>
                <input name="fname" type="text" placeholder="first name" onChange={this.handleChange} required/>
                <input name="lname" type="text" placeholder="last name" onChange={this.handleChange} required/>
                <input name="age" type="number" placeholder="age" onChange={this.handleChange} required/>
                <input name="email" type="text" placeholder="email" onChange={this.handleChange} required/>
                <input name="country" type="text" placeholder="country" onChange={this.handleChange} required/>
                <button onClick={this.handleSubmit}>Submit</button>
                <button onClick={this.hideModal}>Cancel</button>
              </div>
    }else if(type === "delete"){
      return  <div className="box">
                <select name="optVal" onChange={this.handleChange}>
                  <option value="post">Add</option>
                  <option value="delete">Delete</option>
                  <option value="put">Update</option>
                </select>
                <input name="id" type="number" placeholder="id to delete" onChange={this.handleChange} required/>
                <button onClick={this.handleSubmit}>Submit</button>
                <button onClick={this.hideModal}>Cancel</button>
              </div>
    }else{
           return<div className="box">
                  <select name="optVal" onChange={this.handleChange}>
                    <option value="post">Add</option>
                    <option value="delete">Delete</option>
                    <option value="put">Update</option>
                  </select>
                  <input name="id" type="number" placeholder="id to delete" onChange={this.handleChange} required/>
                  <input name="fname" type="text" placeholder="first name" onChange={this.handleChange} required/>
                  <input name="lname" type="text" placeholder="last name" onChange={this.handleChange} required/>
                  <input name="age" type="number" placeholder="age" onChange={this.handleChange} required/>
                  <input name="email" type="text" placeholder="email" onChange={this.handleChange} required/>
                  <input name="country" type="text" placeholder="country" onChange={this.handleChange} required/>
                  <button onClick={this.handleSubmit}>Submit</button>
                  <button onClick={this.hideModal}>Cancel</button>
              </div>
    }
  }

  render(){
    return (
      <div>
        <h1>Crud Data base</h1>
            <div className="table_head">
              <div>ID</div>
              <div>First Name</div>
              <div>Last Name</div>
              <div>Age</div>
              <div>Email</div>
              <div>Country</div>
              <button onClick={this.showModal}>Edit</button>
            </div>
            <Contetnt tableRow={this.state.data}/>
            <div className="modal hidden" ref={this.modalRef}>
             {this.setModalType()}
            </div>
      </div>
    )
  }
}

export default App;