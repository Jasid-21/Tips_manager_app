function GetCurrentDate(): string {
  const rawDate = new Date();
  const day = rawDate.getDate();
  const month = rawDate.getMonth() + 1;
  const year = rawDate.getFullYear();

  return [day, month, year].join('/');
}

export default GetCurrentDate;
