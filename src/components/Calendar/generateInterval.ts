import { eachDayOfInterval, format } from 'date-fns';

import { MarkedDateProps, DayProps } from '.';
import { getPlatformDate } from '../../utils/getPlatformDate';
import theme from '../../Styles/theme';

export function generateInterval(start: DayProps, end: DayProps){
    let intervalo: MarkedDateProps = {};

    eachDayOfInterval({start: new Date(start.timestamp), end: new Date(end.timestamp)})
}