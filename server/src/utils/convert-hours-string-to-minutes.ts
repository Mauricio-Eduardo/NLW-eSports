export function convertHoursStringToMinutes(hourString: string){
    const [hours, min] = hourString.split(':').map(Number)
    const minAmount = (hours * 60) + min;
    return minAmount;
}