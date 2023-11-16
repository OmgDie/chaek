import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { formatTime } from '../utils/timeUtils';

const FirstCity: React.FC = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(120);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(intervalId);
          handleTimeout();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleTimeout = () => {
    console.log('Time is up!');
  };

  const handleSendClick = () => {
    console.log('Город отправлен');
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Card>
        <div className="flex flex-col items-center justify-center">
          <div className="prose flex w-full items-center justify-between pb-4 font-['Helvetica_Neue'] leading-[24px] text-black">
            <span className="text-xl">Сейчас ваша очередь</span>
            <span className="text-xl font-bold">{formatTime(timer)}</span>
          </div>
          <div
            id="Divider"
            className="mx-6 h-1 w-full shrink-0 animate-pulse border-x-0 border-b-0 border-t-2 border-solid border-[#C4B5FD]"
          />

          <div className=" flex items-center justify-center">
            <div className="prose mx-4 flex min-h-[320px] w-full items-center justify-center text-center font-['Helvetica_Neue'] text-[#718096]">
              Первый участник вспоминает города...
            </div>
          </div>

          <div
            id="FooterRoot"
            className="flex h-20 w-[576px] max-w-screen-md flex-row items-center justify-center rounded-lg pt-4"
          >
            <div className="relative w-full px-4 py-3">
              <input
                type="text"
                placeholder="Напишите любой город, например: Где вы живете?"
                className="w-full rounded-lg border-none bg-gray-100 py-3 text-black placeholder-black focus:ring-2 focus:ring-violet-600"
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 transform">
                <div className="flex items-center justify-center rounded-lg bg-violet-500 p-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_7618_580)">
                      <path
                        d="M8.33337 11.6667L17.5 2.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5001 2.5L12.0834 17.5C12.0468 17.5798 11.9881 17.6474 11.9143 17.6948C11.8404 17.7422 11.7545 17.7674 11.6667 17.7674C11.579 17.7674 11.493 17.7422 11.4192 17.6948C11.3453 17.6474 11.2866 17.5798 11.2501 17.5L8.33339 11.6667L2.50006 8.75C2.42027 8.71344 2.35266 8.65474 2.30526 8.58088C2.25786 8.50701 2.23267 8.4211 2.23267 8.33333C2.23267 8.24557 2.25786 8.15965 2.30526 8.08579C2.35266 8.01193 2.42027 7.95323 2.50006 7.91667L17.5001 2.5Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7618_580">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FirstCity;
