import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { login } from './feature/userSlice';
import { ThemeProvider } from './providers/ThemeContext';
import { ErrorProvider } from './providers/ErrorContext';

import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/utils/ScrollToTop';
import NotFound from './components/utils/NotFound';
import TestReduxUser from './components/TestReduxUser';

import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './containers/Navigation';
import TestPosts from './containers/Post/TestPosts';
// import Sidebar from './containers/Sidebar';
import Add from './containers/Add/Add';


// const PrivateRoute = ({ children }) => {
//     return children;
// };
const PrivateRoute = ({ children }) => {
    const { user } = useSelector((state) => state.user);
    return user ? children : <Navigate to={{ pathname: '/login' }} />;
};

function App() {
    const dispatch = useDispatch();
    const userStore = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(login({ email: 'jannowak@gmail.com', password: 'haslo123' }));
    }, []);

    return (
        <ThemeProvider>
            <BrowserRouter>
                <ErrorProvider>
                    <MainLayout>
                        <ScrollToTop />
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/signup" element={<h1>Sigh Up</h1>} />
                            <Route path="/redux" element={<TestReduxUser />} />
                            <Route
                                path="/posts"
                                element={
                                    <PrivateRoute>
                                        <TestPosts />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/home"
                                element={
                                    <PrivateRoute>
                                        <Navbar />
                                        {/* <Sidebar /> */}
                                        <Add />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/:user"
                                element={
                                    <PrivateRoute>
                                        <h1>
                                            Tu zrobimy panel u??ytkonika. B??dzie po routem
                                            "localhost:3000//marcin"
                                        </h1>
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/:user/posts"
                                element={
                                    <PrivateRoute>
                                        <h1>Tu b??da pokazywa?? si?? posty zalogowanego u??ytkownika</h1>
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
                                        <h1>Bardziej dok??adnie jaka?? dana statystyka</h1>
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/posts/:slug"
                                element={
                                    <PrivateRoute>
                                        <h1>Podgl??d pojedynczego postu</h1>
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
                            <Route
                                path="/graph"
                                element={
                                    <PrivateRoute>
                                        <h1>Wykresy no ten</h1>
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/"
                                element={
                                    <h1>
                                        Tu b??dzie landing page kt??ry b??dzie wy??wietla?? si?? nie zalogowanym
                                    </h1>
                                }
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
