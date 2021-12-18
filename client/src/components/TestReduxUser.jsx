import React, { useEffect } from 'react';
import styled from 'styled-components';

// import * as postsApi from '../api/postsAPI';

// import useError from '../providers/ErrorContext';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout} from '../feature/userSlice';

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

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleLogin = () => {
    const values = { email: 'jannowak@gmail.com', password: 'haslo123' };
    dispatch(login(values));
  };
  if (user) {
    return (
      <h1>
        {user.nick}
        {user.email}
        <button onClick={() => dispatch(logout())}>Logout</button>
      </h1>
    );
  }

  return (
    <>
      <StyledTest>
        <button onClick={handleLogin}>Zaloguj się!{user}</button>
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
