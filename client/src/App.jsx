import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ThemeProvider } from './providers/ThemeContext';
import { ErrorProvider } from './providers/ErrorContext';

import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/utils/ScrollToTop';
import NotFound from './components/utils/NotFound';
import Test from './components/Test';

const PrivateRoute = ({ children }) =>
  sessionStorage.getItem('isLogined') ? (
    children
  ) : (
    <Navigate to={{ pathname: '/login' }} />
  );

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ErrorProvider>
          <MainLayout>
            <ScrollToTop />
            <Routes>
              <Route
                path="/admin"
                element={
                  <PrivateRoute>
                    <Test />
                  </PrivateRoute>
                }
              />
              <Route path="/" element={<Test />} />
              <Route path="login" element={<h1>Login</h1>} />
              <Route path="signup" element={<h1>Sigh Up</h1>} />
              <Route path="main" element={<h1>Main</h1>} />
              <Route path="discussion" element={<h1>discussion</h1>} />
              <Route path="statistic" element={<h1>statistic</h1>} />
              <Route path="post" element={<h1>post</h1>} />
              <Route
                path="/post/:category"
                element={<h1>/post/:category</h1>}
              />
              <Route path="*" element={<NotFound />} />
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
