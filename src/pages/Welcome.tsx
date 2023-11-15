import React from 'react';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import { FIRSTCITY_ROUTE } from '../utils/consts';

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    console.log('Button clicked!');
    navigate(FIRSTCITY_ROUTE);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Card buttonText="Начать игру" onButtonClick={handleButtonClick}>
        <div className="prose flex flex-col items-center justify-center">
          <div className="pb-4 font-['Helvetica_Neue'] leading-[24px] text-[black]">
            Игра в города на время
          </div>

          <div
            id="Border"
            className="mx-6 h-1 w-full shrink-0 border-x-0 border-b-0 border-t-2 border-solid border-[#f3f4f6]"
          />

          <div
            id="Element3"
            className="prose mx-4 w-full font-['Helvetica_Neue'] text-sm leading-[21px] text-[#374151]"
          >
            <div className="prose mx-2 pt-4 font-['Helvetica_Neue'] text-sm leading-[21px] text-[#374151]">
              Цель: Назвать как можно больше реальных городов.
            </div>
            <ol className="mx-2 list-disc">
              <li>Запрещается повторение городов.</li>
              <li>
                Названий городов на твердый “ъ” и мягкий “ъ” знак нет. Из-за
                этого бы пропускаем эту букву и игрок должен назвать город на
                букву стоящую перед ъ или ь знаком.
              </li>
              <li>
                Каждому игроку дается 2 минуты на размышления, если спустя это
                время игрок не вводит слово, он считается проигравшим.
              </li>
            </ol>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Welcome;
