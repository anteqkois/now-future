import React, { useEffect } from 'react';
import styled from 'styled-components';

// import * as postsApi from '../api/postsAPI';

// import useError from '../providers/ErrorContext';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, signup } from '../feature/userSlice';
import { useNavigate } from 'react-router-dom';

const StyledTest = styled.div`
  color: ${({ theme }) => theme.colors.textOnBackground};
  ${({ theme }) => theme.typography.H3};
  padding: ${({ theme }) => theme.spacing.xl1};
  p {
    ${({ theme }) => theme.typography.body1}
  }
`;

function TestReduxUser() {
  // const setError = useError();
  // const [post, setPost] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.user);

  const handleLogin = () => {
    const values = { email: 'jannowak@gmail.com', password: 'haslo123' };
    dispatch(login(values));
  };

  const handleSignup = () => {
    const values = { username: '123', email: 'michal123gmail.com', password: 'has' };
    // const values = { email: 'michal123@gmail.com', password: 'haslo123' };
    dispatch(signup(values));
  };

  return (
    <>
      <StyledTest>
        {/* {error ? error : ''} */}
        <button onClick={handleLogin}>Zaloguj się!</button>
        <button onClick={handleSignup}>Stórz konto!</button>
        <button onClick={() => navigate('/private')}>Do private routa</button>
        {user && (
          <h1>
            {user.username}
            {user.email}
            <button onClick={() => dispatch(logout())}>Logout</button>
          </h1>
        )}
      </StyledTest>
    </>
  );
}

export default TestReduxUser;

// useEffect(() => {
//   const timeOut = setTimeout(() => {
//     setError('Coś poszło nie tak!');
//   }, 2000);
//   return () => {
//     clearTimeout(timeOut);
//   };
// }, [setError]);

// useEffect(() => {
//   try {
//     (async () => {
//       setPost(await postsApi.getAll());
//       setIsLoading(false);
//     })();
//   } catch (error) {
//     console.log(error);
//   }
// }, []);
// !isLoading && console.log(post);
