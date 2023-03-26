// Better Way To Do It
const mappedDay = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7,
};

const dayValue = mappedDay[day] || 0;

console.log(dayValue);
