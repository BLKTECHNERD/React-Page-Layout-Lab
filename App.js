import React, { Component } from "react";
import "./styles.css";
import employeePhoto from "./images/pexels-andrea-piacquadio-3756679.jpg";
import employeePhoto1 from "./images/1.jpg";
import employeePhoto2 from "./images/2.jpg";
import employeePhoto3 from "./images/3.jpg";
import employeePhoto4 from "./images/4.jpg";
import employeePhoto5 from "./images/5.jpg";
import employeePhoto6 from "./images/6.jpg";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" />
    </div>
  );
};

const EmployeeList = () => {
  const employees = [
    {
      id: 1,
      name: "James King",
      position: "President and CEO",
      photo: employeePhoto1,
    },
    {
      id: 2,
      name: "Julie Taylor",
      position: "VP of Marketing",
      photo: employeePhoto2,
    },
    { id: 3, name: "Eugene Lee", position: "CFO", photo: employeePhoto3 },
    {
      id: 4,
      name: "John Williams",
      position: "VP of Engineering",
      photo: employeePhoto4,
    },
    {
      id: 5,
      name: "Ray Moore",
      position: "VP of Sales",
      photo: employeePhoto5,
    },
    {
      id: 6,
      name: "Paul Jones",
      position: "QA Manager",
      photo: employeePhoto6,
    },
  ];

  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeListItem key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

const EmployeeListItem = ({ employee }) => {
  return (
    <div className="employee">
      <div className="employee-photo">
        <img src={employee.photo} alt={employee.name} />
      </div>
      <div className="employee-details">
        <h3>{employee.name}</h3>
        <p>{employee.position}</p>
      </div>
    </div>
  );
};

const EmployeePage = ({ employee }) => {
  const { name, position, officePhone, mobilePhone, mobileText, email } = employee;

  return (
    <div className="employee-page">
      <div className="employee-details">
        <div className="employee-box">
          <div className="employee-photo">
            <img src={employeePhoto} alt={name} />
          </div>
          <div className="employee-info">
            <div className="employee-name">{name}</div>
            <div className="employee-position">{position}</div>
          </div>
        </div>
        <div className="contact-details">
          <div className="contact-box">
            <p className="contact-label">Call Office</p>
            <p>{officePhone}</p>
          </div>
          <div className="contact-box">
            <p className="contact-label">Call Mobile</p>
            <p>{mobilePhone}</p>
          </div>
          <div className="contact-box">
            <p className="contact-label">SMS</p>
            <p>{mobileText}</p>
          </div>
          <div className="contact-box">
            <p className="contact-label">Email</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};



class App extends Component {
  render() {
    const selectedEmployee = {
      id: 1,
      name: "Julie Taylor",
      position: "VP of Marketing",
      officePhone: "Call Office 781-000-0002",
      mobilePhone: "Call Mobile 617-000-0002",
      mobileText: "SMS 617-000-0002",
      email: "Email jtaylor@fakemail.net",
    };

    return (
      <div className="container">
        <div className="app">
          <div className="content">
            <div className="left-column">
              <h2>Employee Directory</h2>
              <SearchBar />
              <EmployeeList />
            </div>
            <div className="right-column">
              <h2>Employee</h2>
              <div className="employee-page">
                <div className="employee-details">
                  <div className="employee-box">
                    <div className="employee-photo">
                      <img src={employeePhoto} alt={selectedEmployee.name} />
                    </div>
                    <div className="employee-info">
                      <h3>{selectedEmployee.name}</h3>
                      <p>{selectedEmployee.position}</p>
                    </div>
                  </div>
                  <div className="contact-details">
                    <div className="contact-box">
                      <div>{selectedEmployee.officePhone}</div>
                    </div>
                    <div className="contact-box">
                      <div>{selectedEmployee.mobilePhone}</div>
                    </div>
                    <div className="contact-box">
                      <div>{selectedEmployee.mobileText}</div>
                    </div>
                    <div className="contact-box">
                      <div>{selectedEmployee.email}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
