function compareTime(timestrng1, tiestring2) {
  let datetime1 = new Date(timestrng1);
  let datetime2 = new Date(tiestring2);
  return datetime1.getTime() > datetime2.getTime();
}
module.exports = {
  compareTime,
};
