import { useDispatch } from 'react-redux';
import { setLogin } from '../utils/userSlice';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const GetStarted = () => {
  const [mail, setMail] = useState<string>('');
  const [signInStatus, setSignInStatus] = useState<boolean>(false);
  const dispatch = useDispatch();

  const signUPHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (mail) {
      dispatch(setLogin({ isLogin: true, userMail: mail }));
      setMail('');
      setSignInStatus(true);
    }
  };

  const mailHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log('input value', e.target.value);
    setMail(e.target.value);
  };

  return (
    <>
      {signInStatus ? (
        <Navigate to="/login" replace={true} />
      ) : (
        <div className="flex justify-center items-center my-60">
          <div className="text-white text-center">
            <h1 className="text-7xl font-extrabold py-3">
              Unlimited movies, TV shows and more
            </h1>
            <p className="text-3xl font-bold py-3 ">
              Watch anywhere, cancel anytime{' '}
            </p>
            <p className="text-3xl font-semibold py-3">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form
              className="flex justify-center items-center gap-5"
              onSubmit={(e) => {
                signUPHandler(e);
              }}
            >
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-[60%] text-2xl py-4 px-2 text-gray-400"
                value={mail}
                onChange={(e) => {
                  mailHandler(e);
                }}
              />
              <button className="bg-red-600 py-4 px-6 text-2xl font-bold rounded-md">
                Get Started
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default GetStarted;
