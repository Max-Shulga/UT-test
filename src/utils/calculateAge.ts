import monthNames from "@/utils/monthNames";

const calculateAge = (selectedMonth: string, selectedDay: string, selectedYear: string): number => {
    const monthIndex = monthNames.indexOf(selectedMonth);
    const birthDate = new Date(`${selectedYear}-${(monthIndex + 1).toString().padStart(2, '0')}-${selectedDay.padStart(2, '0')}`);
    const today = new Date();

    let calculatedAge = today.getFullYear() - birthDate.getFullYear();

    const hasBirthdayPassed = today.getMonth() > birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassed) {
        calculatedAge--;
    }

    return calculatedAge;

};
export default calculateAge;
