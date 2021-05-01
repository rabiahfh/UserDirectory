import React,{Component} from "react"
import api from "../utils/api.js"
import Table from "../components/table.js"
import Search from "../components/search.js"
class Employee extends Component{
    state={
         employees:[], 
         original:[],
         search:""

    }
    componentDidMount(){
         api.getEmployee().then(res =>{
             this.setState({employees:res.data.results,original:res.data.results})
         })
    }
handleInputChange = (event)=>{
    const {name,value}=event.target
    this.setState({[name]:value })
    const filterEmployees = this.state.original.filter(employee=>{
        return employee.name.first.toLowerCase().includes(value.toLowerCase())
    })
  this.setState({employees:filterEmployees})

}

    handleSort = ()=>{
         const sortedEmployees = this.state.employees.sort((employee,nextEmployee )=>{
             return employee.name.first.localeCompare(nextEmployee.name.first)
         })
         this.setState ({employees:sortedEmployees})

    }
    render(){
        return(
            <>
            <Search search={this.state.search} handleInputChange={this.handleInputChange} />
              <Table randomEmployees= {this.state.employees} handleSort={this.handleSort}/>

        
            {/* child components to make page: table, search box  */}
            </>
        )
    }
}
export default Employee