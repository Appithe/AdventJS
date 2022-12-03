function countHours(year, holidays) {
	const weekend = [0, 6];
	let totalExtraHours = 0;

	const days = holidays.map((holiday) => {
		const [month, day] = holiday.split("/");

		return new Date( new Date().setUTCFullYear(year, month - 1, day) ).getUTCDay();
	});

	days.filter((day) => !weekend.includes(day)).forEach(() => {
		totalExtraHours += 2;
	});

	return totalExtraHours
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

console.log(countHours(year, holidays)); // 2 días -> 4 horas extra en el año