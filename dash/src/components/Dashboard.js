// import React from "react";
// import { Route, Routes } from "react-router-dom";

// import Apps from "./Apps";
// import Funds from "./Funds";
// import Holdings from "./Holdings";

// import Orders from "./Orders";
// import Positions from "./Positions";
// import Summary from "./Summary";
// import WatchList from "./WatchList";
// import { GeneralContextProvider } from "./GeneralContext";
// import Authentication from "./authentication";

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <GeneralContextProvider>
//         <WatchList />
//       </GeneralContextProvider>
//       <div className="content">
//         <Routes>
//           <Route exact path="/" element={<Summary />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/holdings" element={<Holdings />} />
//           <Route path="/positions" element={<Positions />} />
//           <Route path="/funds" element={<Funds />} />
//           <Route path="/apps" element={<Apps />} />
//           <Route path="/auth" element={<Authentication />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;





import React from "react";
import { Route, Routes } from "react-router-dom";
import Holdings from "./Holdings";
import Summary from "./Summary";
import Orders from "./Orders";
import Authentication from "./authentication";

const Dashboard = () => {
  return (

      <div className="content">
        <Routes>
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route exact path="/" element={<Summary />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>
      </div>
  );
};

export default Dashboard;










// import { motion } from "framer-motion";
// import { Bell,Search, User } from "lucide-react";
// import Authentication from "./authentication";


// export default function Dashboard() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="flex justify-between items-center p-4 bg-white shadow-md">
//         <div className="text-xl font-bold">Floww HRMS</div>
//         <div className="flex items-center gap-4">
//           <input type="text" placeholder="Search for anything here" className="border p-2 rounded-md w-80" />
//           <Bell className="w-6 h-6 text-gray-600" />
//           <User className="w-8 h-8 rounded-full bg-gray-300" />
//         </div>
//         <div class="content">
//           <Routes>
//             <Route path="/auth" element={<Authentication />} />
//           </Routes>
//         </div>
//       </header>

//       {/* Sidebar & Main Content */}
//       <div className="flex">
//         {/* Sidebar */}
//         <nav className="w-64 bg-white p-6 shadow-md">
//           <ul className="space-y-4">
//             <li className="font-semibold">🏠 Home</li>
//             <li>👥 Add Employee</li>
//             <li>📋 View Employee</li>
//             <li>📌 Create Task</li>
//             <li>📅 Attendance Summary</li>
//             <li>💰 Payroll Management</li>
//             <li>🔄 360° Feedback</li>
//           </ul>
//         </nav>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           <h2 className="text-2xl font-bold">Welcome, HR Manager!</h2>
//           <p className="text-gray-600 mb-4">Organize your work and improve team performance.</p>

//           {/* Dashboard Widgets */}
//           <div className="grid grid-cols-4 gap-6">
//             <div className="p-4 bg-white shadow-md rounded-lg">Add Employee</div>
//             <div className="p-4 bg-white shadow-md rounded-lg">Create Task</div>
//             <div className="p-4 bg-white shadow-md rounded-lg">Add Holiday</div>
//             <div className="p-4 bg-white shadow-md rounded-lg">Add Office</div>
//           </div>

//           {/* 360-Degree Feedback Section */}
//           <section className="mt-8 p-6 bg-white shadow-md rounded-lg">
//             <h3 className="text-xl font-bold">360° Feedback</h3>
//             <p className="text-gray-600 mb-4">Collect feedback from multiple sources to evaluate employee performance.</p>
            
//             <div className="grid grid-cols-3 gap-6">
//               <div className="p-4 bg-gray-100 rounded-lg">Manager Feedback</div>
//               <div className="p-4 bg-gray-100 rounded-lg">Peer Feedback</div>
//               <div className="p-4 bg-gray-100 rounded-lg">Self-Assessment</div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }

