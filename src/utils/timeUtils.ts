import dayjs from 'dayjs';

export const formatTime = (seconds: number): string => {
  const formattedTime: string = dayjs()
    .startOf('day')
    .add(seconds, 'second')
    .format('mm:ss');
  return formattedTime;
};
