export function convertTimeFormat(inputTime) {
  const time = new Date(inputTime);
  let hours = time.getHours();
  let minutes = time.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const timeIn12hrFormat = hours + ":" + minutes + " " + ampm;

  return timeIn12hrFormat;
}
