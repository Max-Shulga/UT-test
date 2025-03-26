function getDaysInMonth(monthName: string, year: number=2000): number[] {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const monthIndex = months.indexOf(monthName);

    if (monthIndex === -1) {
        throw new Error("Invalid month name");
    }

    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, index) => index + 1);
}
export default getDaysInMonth
