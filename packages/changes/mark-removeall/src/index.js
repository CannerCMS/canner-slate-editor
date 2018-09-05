export default change => {
  const { value } = change;
  if (value.marks) {
    // remove all marks
    value.marks.forEach(mark => {
      change.removeMark(mark);
    });
  }

  return change;
};
