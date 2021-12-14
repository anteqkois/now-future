// Error modal must take props: errorMessage, handleResetError

import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ErrorContext = React.createContext();

function ErrorModal({ errorMessage, handleResetError }) {
  return (
    <>
      <div>{errorMessage}</div>
      <button onClick={handleResetError}>Zamknij</button>
    </>
  );
}

export const ErrorProvider = ({ children }) => {
  const [redirectPath, setRedirectPath] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleResetError = () => {
    setErrorMessage('');
    setRedirectPath('');
    redirectPath && navigate(redirectPath);
  };

  return (
    <ErrorContext.Provider
      value={{
        errorMessage: errorMessage,
        setErrorMessage: setErrorMessage,
        setRedirectPath: setRedirectPath,
      }}
    >
      {errorMessage && (
        <ErrorModal
          errorMessage={errorMessage}
          handleResetError={handleResetError}
        />
      )}
      {children}
    </ErrorContext.Provider>
  );
};

const useError = (redirectPath = '') => {
  const { setErrorMessage, setRedirectPath } = useContext(ErrorContext);

  useEffect(() => {
    setRedirectPath(redirectPath);
  }, [redirectPath, setRedirectPath]);

  return setErrorMessage;
};

export default useError;
