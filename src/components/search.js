import React from "react"

// function
function Search(props){
    return (
        <form>
            <input  onChange={props.handleInputChange}  name="search" value={props.search}  placeholder = "search for employee"/>
            
        </form>

    )
}
// return inside function
// export
export default Search