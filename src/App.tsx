import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { useState } from "react";

import { Divider } from 'antd';
import HelloModal from './components/HelloModal';
import Home from './pages/Home';
import LibVersion from './components/LibVersion';

// const About = lazy(() => import('./pages/About'));

// const RouteExample = () => {
//   return (
//     //@ts-ignore
//     <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react16' : '/'}>
//       <nav>
//         <Link to="/">Home</Link>
//         <Divider type="vertical" />
//         <Link to="/about">About</Link>
//       </nav>
//       <Suspense fallback={null}>
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/about" component={About} />
//         </Switch>
//       </Suspense>
//     </Router>
//   );
// };

export default function App() {
  const [time, setTime] = useState<Date>(new Date());
  const tick = setInterval(() => setTime(new Date()));
  return (
    <div className="rounded-xl bg-gray-800 flex flex-col p-8 bg-opacity-25">
      <div className="w-128 h-16 items-center text-white mb-5 flex-shrink-0">
        <span className="text-4xl">{time.toLocaleTimeString()}</span>
        <span className="text-lg pl-4">
          {time.toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
      <div className="flex-grow text-white">
        <h2 className="text-xl title-font font-medium mb-3">World Clock</h2>
        <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
          <div className="w-full">
            <div className="widget w-full p-4 rounded-lg bg-gray-600 bg-opacity-25">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <div className="text-xs uppercase font-light">
                    India
                  </div>
                  <div className="font-bold text-xs">
                    {time.toLocaleTimeString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="widget w-full p-4 rounded-lg bg-gray-600 bg-opacity-25">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <div className="text-xs uppercase font-light">
                    India
                  </div>
                  <div className="font-bold text-xs">
                    {time.toLocaleTimeString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
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
