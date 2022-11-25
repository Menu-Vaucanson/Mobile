function ToRealMonth(month: number) {
	if (month === 0) {
		return 12;
	}

	return month + 1;
}

export default ToRealMonth;