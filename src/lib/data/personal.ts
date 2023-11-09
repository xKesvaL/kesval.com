import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const PERSONAL = {
  yearsOfExperience: dayjs().diff(dayjs('2012-06-15'), 'year')
} as const;

export default PERSONAL;