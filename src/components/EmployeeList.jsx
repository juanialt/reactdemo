import React from 'react'
import EmployeeRow from './EmployeeRow'

class EmployeeList extends React.Component {

render() {
    return (
        <ul className="media-list">{
            this.props.listado.map((empleado) => {
                return <EmployeeRow key={ empleado.id }
                        name={ empleado.fullName }
                        picture={ empleado.pic }
                        title={ empleado.title }
                        department={ empleado.department } />
            })}
        </ul>
    )}
}

export default EmployeeList
