import React from 'react'
import EmployeeList from './components/EmployeeList'

let empleados = [
    { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "avatar-1.png" },
    { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "avatar-2.png" },
    { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "avatar-3.png" },
    { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "avatar-4.png" },
    { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "avatar-5.png" },
    { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "avatar-3.png" },
    { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "avatar-1.png" },
    { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "avatar-5.png" },
    { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "avatar-2.png" }
];

React.render(<EmployeeList listado={ empleados } />, document.getElementById('application'));
