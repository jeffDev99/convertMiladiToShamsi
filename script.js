const today = Date.now();
 
const todayFa = {
    "day" : getDateFormat(today , {"day" : "2-digit"}),
    "month" : getDateFormat(today , {"month" : "numeric"}),
    "monthTitle" : getDateFormat(today , {"month" : "long"}),
    "year" : getDateFormat(today , {"year" : "numeric"}),
    "dayWeek" : getDateFormat(today , {"weekday" : "long"}),
}
 
function getDateFormat(uDate,option){
    let date = new Intl.DateTimeFormat('fa-IR', option).format(uDate);
    return date;
} 
 
console.log(todayFa);
 
/*
{
  day: "۰۱",
  dayWeek: "جمعه",
  month: "۱۱",
  monthTitle: "بهمن",
  year: "۱۴۰۰"
}
*/
