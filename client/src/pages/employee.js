import React,{Component} from "react"
import api from "../utils/api.js"
import Table from "../components/table.js"
import Search from "../components/search.js"
class Employee extends Component{
    state={
         employees:[], 
         search:""

    }
    componentDidMount(){
         api.getEmployee().then(res =>{
             this.setState({employees:res.data.results})
         })
    }
    render(){
        return(
            <>
            <Search/>
              <Table randomEmployees= {this.state.employees} />

        
            {/* child components to make page: table, search box  */}
            </>
        )
    }
}
export default Employee