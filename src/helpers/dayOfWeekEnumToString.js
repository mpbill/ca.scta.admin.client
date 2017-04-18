import {dayOfWeek} from '../constants/enums';
export default function dayOfWeekEnumToString(d) {
  switch(d){
    case dayOfWeek.sunday:
      return "Sun";
    case dayOfWeek.monday:
      return "Mon";
    case dayOfWeek.tuesday:
      return "Tue";
    case dayOfWeek.wednesday:
      return "Wed";
    case dayOfWeek.thursday:
      return "Thu";
    case dayOfWeek.friday:
      return "Fri";
    case dayOfWeek.saturday:
      return "Sat";
    default:
      throw "Day of week does not exist";
  }
}
