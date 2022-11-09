import dateFormat from 'dateformat';
import moment from 'moment';

export const DISPLAY_DATE_FORMAT = 'dddd, mmm d';

export const presentTime = (date: Date, format: string = 'HH:MM') => {
  return dateFormat(date, format);
};

export const isToday = (date: Date) => {
  return moment(date).isSame(new Date(), 'day');
};
