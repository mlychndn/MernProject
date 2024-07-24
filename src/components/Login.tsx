import { useSelector } from 'react-redux';
import { RootState } from '../utils/store';
import { useState } from 'react';
import { validateEmail, validatePassword } from '../utils/validator';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const userData = useSelector((state: RootState) => state.user);
  const [email, setEmail] = useState<string>(userData?.userMail);
  const [password, setPassword] = useState<string>('');
  const [navigate, setNavigate] = useState<string>('');

  const userDataHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const formHandler = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const body = JSON.stringify({
      email,
      password,
    });

    if (validateEmail(email) && validatePassword(password)) {
      const status = await fetch('http://localhost:8080/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body,
      });

      const statusData = await status.json();

      setNavigate(statusData?.status);

      setEmail('');
      setPassword('');
    }
  };
  return (
    <>
      {navigate === 'success' ? (
        <Navigate to="/home" replace={true} />
      ) : (
        <div className="flex items-center flex-col text-white opacity-70">
          <div className="w-[30%] bg-black px-6 py-6">
            <h1 className="text-2xl text-bold my-4">Sign In</h1>
            <form
              className="flex flex-col"
              onSubmit={(e) => {
                formHandler(e);
              }}
            >
              <input
                type="email"
                placeholder="Email"
                className="w-[95%] my-2 py-2 px-4 bg-black border border-white"
                value={email}
                onChange={(e) => {
                  userDataHandler(e);
                }}
              />
              <input
                type="password"
                placeholder="password"
                className="w-[95%] my-2 py-2 px-4 bg-black border border-white"
                value={password}
                onChange={(e) => {
                  passwordHandler(e);
                }}
              />
              <button className="w-[95%] my-2 py-2 bg-red-700">Sign In</button>
            </form>
            <p className="mx-auto my-2 text-xl">
              new to netflix?{' '}
              <a className="text-bold cursor-pointer">Sign up now</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
