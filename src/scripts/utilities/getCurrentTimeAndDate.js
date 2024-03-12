const getCurrentTimeAndDate = () => {
  // Create a new Date object
  const currentDate = new Date();

  // Use object destructuring to get the individual components of the date and time
  const {
    getDate: day,
    getMonth: month,
    getFullYear: year,
    getHours: hours,
    getMinutes: minutes,
    getSeconds: seconds
  } = currentDate;

  // Format the date and time components with leading zeros for single digits
  const formatNumber = num => num.toString().padStart(2, '0');

  // Format the date and time in UK format (DD/MM/YYYY HH:MM:SS)
  return `${formatNumber(day())}/${formatNumber(month() + 1)}/${year()} ${formatNumber(hours())}:${formatNumber(minutes())}:${formatNumber(seconds())}`;
};
