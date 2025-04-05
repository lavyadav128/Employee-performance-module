// import React from "react";

// const Summary = () => {
//   return (
//     <>
//       <div className="username">
//         <h6>Hi, User!</h6>
//         <hr className="divider" />
//       </div>

//       <div className="section">
//         <span>
//           <p>Equity</p>
//         </span>

//         <div className="data">
//           <div className="first">
//             <h3>3.74k</h3>
//             <p>Margin available</p>
//           </div>
//           <hr />

//           <div className="second">
//             <p>
//               Margins used <span>0</span>{" "}
//             </p>
//             <p>
//               Opening balance <span>3.74k</span>{" "}
//             </p>
//           </div>
//         </div>
//         <hr className="divider" />
//       </div>

//       <div className="section">
//         <span>
//           <p>Holdings (13)</p>
//         </span>

//         <div className="data">
//           <div className="first">
//             <h3 className="profit">
//               1.55k <small>+5.20%</small>{" "}
//             </h3>
//             <p>P&L</p>
//           </div>
//           <hr />

//           <div className="second">
//             <p>
//               Current Value <span>31.43k</span>{" "}
//             </p>
//             <p>
//               Investment <span>29.88k</span>{" "}
//             </p>
//           </div>
//         </div>
//         <hr className="divider" />
//       </div>
//     </>
//   );
// };

// export default Summary;












import { motion } from "framer-motion";
import { Bell,Search, User } from "lucide-react";
import Authentication from "./authentication";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
//import { Bell,Search, User } from "lucide-react";

import { Link } from "react-router-dom";

const Summary = () => {

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <>
       <div className="min-h-screen bg-gray-100">
       {/* Header
       <header className="flex justify-between items-center p-4 bg-white shadow-md">
         <div className="text-xl font-bold">Floww HRMS</div>
         <div className="flex items-center gap-4">
          <input type="text" placeholder="Search for anything here" className="border p-2 rounded-md w-80" />
           <Bell className="w-6 h-6 text-gray-600" />
           <User className="w-8 h-8 rounded-full bg-gray-300" />
         </div>
         <div class="content">
           <Routes>
             <Route path="/auth" element={<Authentication />} />
           </Routes>
        </div>
       </header> */}

       {/* Sidebar & Main Content */}
       <div className="flex h-auto" >
        {/* Sidebar */}
        <nav className="w-64 h-screen bg-white p-6 shadow-md">
           <ul className="space-y-10">
            <li className="font-semibold">
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}style={{fontSize:"1.1rem"}}>
              🏠 Home
              </p>
            </Link>
              </li>


             <li>
             <Link
              style={{ textDecoration: "none" }}
              to="/addemploy"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}style={{fontSize:"1.1rem"}}>
              👥 Add Employee
              </p>
            </Link>

             </li>
             
            <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}style={{fontSize:"1.1rem"}}>
              📋 View Employee
              </p>
            </Link>
            </li>


            <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/createtask"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}style={{fontSize:"1.1rem"}}>
              📌 Create Task
              </p>
            </Link>
              </li>


             <li>
             <Link
              style={{ textDecoration: "none" }}
              to="/attendance"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}style={{fontSize:"1.1rem"}}>
              📅 Attendance
              </p>
            </Link>
               </li>


            <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/payrollmanage"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}style={{fontSize:"1.1rem"}}>
              💰 Payroll Management
              </p>
            </Link>
              </li>

            <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}style={{fontSize:"1.1rem"}}>
              🔄 360° Feedback
              </p>
            </Link>
              </li>
          </ul>
        </nav>

         {/* Main Content */}
         <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold">Welcome, HR Manager!</h2>
           <p className="text-gray-600 mb-4">Organize your work and improve team performance.</p>

           {/* Dashboard Widgets */}
           <div className="grid grid-cols-4 gap-6 mt-7">
            <div className="p-4 bg-white shadow-md rounded-lg">Add Employee</div>
            <div className="p-4 bg-white shadow-md rounded-lg">Create Task</div>
             <div className="p-4 bg-white shadow-md rounded-lg">Add Holiday</div>
            <div className="p-4 bg-white shadow-md rounded-lg">Add Office</div>
           </div>

          {/* 360-Degree Feedback Section */}
         <section className="mt-12 p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold">360° Feedback</h3>
            <p className="text-gray-600 mb-4">Collect feedback from multiple sources to evaluate employee performance.</p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="p-4 bg-gray-100 rounded-lg">Manager Feedback</div>
               <div className="p-4 bg-gray-100 rounded-lg">Peer Feedback</div>
               <div className="p-4 bg-gray-100 rounded-lg">Self-Assessment</div>
             </div>
           </section>
         </main>
       </div>
     </div>
    </>
  );
};

export default Summary;

