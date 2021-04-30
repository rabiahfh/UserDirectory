function Table(props){
    return (
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Photo</th>
    </tr>
  </thead>
  <tbody>
      {props.randomEmployees.map ((employee,i) =>
      (
    <tr>
      <th scope="row">{i + 1}</th>
      <td>{employee.name.first}</td>
      <td>{employee.name.last}</td>
      <td>{employee.email}</td>
      <td><img src={employee.picture.thumbnail}/></td>
    </tr>
    )
    )}
  </tbody>
</table>
    )
}
export default Table 