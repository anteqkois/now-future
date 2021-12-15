import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ThemeProvider } from './providers/ThemeContext';
import { ErrorProvider } from './providers/ErrorContext';

import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/utils/ScrollToTop';
import NotFound from './components/utils/NotFound';
import Test from './components/Test';

const PrivateRoute = ({ children }) =>
  // sessionStorage.getItem('isLogined') ? children : <Navigate to={{ pathname: '/login' }} />;
  children;

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ErrorProvider>
          <MainLayout>
            <ScrollToTop />
            <Routes>
              <Route path="/login" element={<h1>Login</h1>} />
              <Route path="/signup" element={<h1>Sigh Up</h1>} />
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <h1>Tu będzie stron startowa po zalogowaniu + tu zamieszczę możliwośc szukania po # itdl.</h1>
                  </PrivateRoute>
                }
              />
              <Route
                path="/:user"
                element={
                  <PrivateRoute>
                    <h1>Tu zrobimy panel użytkonika. Będzie po routem "localhost:3000//marcin"</h1>
                  </PrivateRoute>
                }
              />
              <Route
                path="/:user/posts"
                element={
                  <PrivateRoute>
                    <h1>Tu będa pokazywać się posty zalogowanego użytkownika</h1>
                  </PrivateRoute>
                }
              />
              <Route
                path="/statistic"
                element={
                  <PrivateRoute>
                    <h1>Statystyki</h1>
                  </PrivateRoute>
                }
              />
              <Route
                path="/statistic/:option"
                element={
                  <PrivateRoute>
                    <h1>Bardziej dokładnie jakaś dana statystyka</h1>
                  </PrivateRoute>
                }
              />
              <Route
                path="/posts/:slug"
                element={
                  <PrivateRoute>
                    <h1>Podgląd pojedynczego postu</h1>
                  </PrivateRoute>
                }
              />
              <Route
                path="/posts/create"
                element={
                  <PrivateRoute>
                    <h1>Tworzenie postu</h1>
                  </PrivateRoute>
                }
              />
              <Route
                path="/posts/edit/:slug"
                element={
                  <PrivateRoute>
                    <h1>Edycja postu</h1>
                  </PrivateRoute>
                }
              />
              <Route path="/" element={<h1>Tu będzie landing page który będzie wyświetlać się nie zalogowanym</h1>} />
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
