function calculateDaysBetweenDates(begin, end) {
  // We need to clone the dates to avoid changing the original
  const date1 = new Date(begin);
  const date2 = new Date(end);

  // We need to convert both dates to milliseconds
  const date1Ms = date1.getTime();
  const date2Ms = date2.getTime();

  // Calculate the difference in milliseconds
  const differenceMs = Math.abs(date1Ms - date2Ms);

  // Convert back to days and return
  return Math.round(differenceMs / 86400000);
}
