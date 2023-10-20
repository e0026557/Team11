import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingIcon from '../../shared/spinner/LoadingIcon';

const Logout =  () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('userId')) {
      console.log('Logout success')
      sessionStorage.removeItem('userId');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    }
  }, []);  

  return (
    <>
      <main className="grid min-h-fit place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Logout Successful
          </h1>
          <p className="my-6  text-base leading-7 text-gray-600">
            Redirecting ...
          </p>
          <LoadingIcon />
          {/* <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a href="/support" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </div>
      </main>
    </>
  )
}

export default Logout;