import { addMonths } from 'date-fns';

export function daysInMonth (month, year) {
	return new Date(year, month, 0).getDate();
}

export const calculatorDays= (beginDate:Date|null,finishDate:Date|null| undefined) => {

	if(beginDate == null ||finishDate == null||finishDate == undefined){

		return '0 Days';

	}else{

		const percenterProfit = 0.04;
		finishDate = new Date(finishDate);
		let  startDate = beginDate;
		let  days = 0;
		console.log(startDate,finishDate );
		while( startDate <= finishDate ) {
			const dayMoth = daysInMonth(startDate.getMonth(),startDate.getFullYear());

			if(startDate.getMonth() == finishDate.getMonth() && startDate.getFullYear() == finishDate.getFullYear() &&
			  beginDate.getMonth() == finishDate.getMonth() && beginDate.getFullYear() == finishDate.getFullYear()){

		  	days += (dayMoth - beginDate.getDate())+(finishDate.getDate() - dayMoth);

			}
			else if(startDate == beginDate){
				days += (dayMoth - beginDate.getDate());
			}
			else if(startDate.getMonth() == finishDate.getMonth() && startDate.getFullYear() == finishDate.getFullYear()){

				days += (dayMoth - finishDate.getDate());
			}else{
				days += dayMoth;
			}
			startDate = addMonths(new Date(startDate), 1);
		}
		return days;
	}
};