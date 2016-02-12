import React from 'react'

class EmployeeAvatar extends React.Component {
    render() {
        return (
            <figure className="employee-avatar">
                <img src={`./assets/${this.props.picture}`} />
            </figure>
        )
    }
}

export default EmployeeAvatar
