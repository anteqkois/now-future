import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { ThemeProvider } from './providers/ThemeContext';
import { ErrorProvider } from './providers/ErrorContext';

import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/utils/ScrollToTop';
import NotFound from './components/utils/NotFound';
import Test from './components/Test';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       sessionStorage.getItem('isLogined') ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{ pathname: '/login', state: { from: props.location } }}
//         />
//       )
//     }
//   />
// );

function App() {
  return (
    <ThemeProvider>
      < BrowserRouter>
        <ErrorProvider>
          <MainLayout>
            <ScrollToTop />
            <Routes>
              {/* <PrivateRoute path="/admin" component={<h1>Admin</h1>} /> */}
              <Route path="/" element={<Test/>} />
              <Route path="*" component={<NotFound/>} />
            </Routes>
          </MainLayout>
        </ErrorProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

// return (
//   <ThemeProvider>
//     <Router>
//       <ErrorProvider>
//         <MainLayout>
//           <ScrollToTop />
//           <Switch>
//             <PrivateRoute path="/admin" component={<h1>Admin</h1>} />
//             <Route exact path="/" component={Test} />
//             <Route path="*" component={NotFound} />
//           </Switch>
//         </MainLayout>
//       </ErrorProvider>
//     </Router>
//   </ThemeProvider>
// );