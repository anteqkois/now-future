import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import * as postsApi from '../api/postsAPI';

import useError from '../providers/ErrorContext';

const StyledTest = styled.div`
  color: ${({ theme }) => theme.colors.textOnBackground};
  ${({ theme }) => theme.typography.H3};
  padding: ${({ theme }) => theme.spacing.xl1};
  p {
    ${({ theme }) => theme.typography.body1}
  }
`;

const StyledTestTwo = styled.div`
  color: ${({ theme }) => theme.colors.textOnBackground};
  ${({ theme }) => theme.typography.H3};
  padding: ${({ theme }) => theme.spacing.xl1};
  h2 {
    ${({ theme }) => theme.typography.H1};
    color: ${({ theme }) => theme.colors.primary};
  }
  p {
    ${({ theme }) => theme.typography.body1}
  }
`;

function Test() {
  // const setError = useError();
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     setError('Coś poszło nie tak!');
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timeOut);
  //   };
  // }, [setError]);

  useEffect(() => {
    try {
      (async () => {
        setPost(await postsApi.getAll());
        setIsLoading(false);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);
  !isLoading && console.log(post);

  return (
    <>
      <StyledTest></StyledTest>
    </>
  );
}

export default Test;
