import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-CN');
console.log(
  moment()
    .subtract(6, 'days')
    .calendar()
);
