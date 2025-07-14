import React from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Home/Dashboard';
import InterviewPrep from './pages/InterviewPrep/InterviewPrep';

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/interview-prep/:sessionId' element={<InterviewPrep />} />
        </Routes>
      </BrowserRouter>

      <Toaster
      toastOptions={{
        className: "",
        style:{
          fontSize: "13px",
        }
      }}/>

    </div>
  );
};

export default App;



// 
//   <>
//   <div className="flex flex-col items-center gap-8">
//                 {/* add first 5 features */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
//
//
//                   {data.slice(0, 5).map((feature) => (
//                     <div key={feature.id} className="bg-[#fffef8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100">
//                       <h3 className="text-base font-semibold mb-3">{feature.title}</h3>
//                       <p className="text-gray-600">{feature.description}</p>
//                     </div>
//                   ))}
//                 </div>
//                 {/* add last 5 features */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   {data.slice(5).map((feature) => (
//                     <div key={feature.id} className="bg-[#fffef8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100">
//                       <h3 className="text-base font-semibold mb-3">{feature.title}</h3>
//                       <p className="text-gray-600">{feature.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               </>