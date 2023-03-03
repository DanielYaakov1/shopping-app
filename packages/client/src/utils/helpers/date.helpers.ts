import dateFormat from 'dateformat';
import moment from 'moment';

export const DISPLAY_DATE_FORMAT = 'dddd, mmm d';

export const presentTime = (date: Date, format: string = 'HH:MM') => {
  return dateFormat(date, format);
};

export const isToday = (date: Date) => {
  return moment(date).isSame(new Date(), 'day');
};

export const getFullDateAndHour = (isoString: Date | string | number) => {
  const date = new Date(isoString);
  const options: any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  return date.toLocaleString('en-US', options);
};

export const getFullDate = (isoString: Date | string | number) => {
  const date = new Date(isoString);
  const options: any = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleString('en-US', options);
};
