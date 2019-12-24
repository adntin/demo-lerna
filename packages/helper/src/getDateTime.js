/**
 * 获取日期时间毫秒
 * @param {Number} timestamp - 时间戳
 * @returns {Number} 2019-07-22 08:08:08.008
 */
const getDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  let month = now.getMonth() + 1;
  month = month >= 10 ? month : `0${month}`;
  let date = now.getDate();
  date = date >= 10 ? date : `0${date}`;
  let hour = now.getHours();
  hour = hour >= 10 ? hour : `0${hour}`;
  let minute = now.getMinutes();
  minute = minute >= 10 ? minute : `0${minute}`;
  let second = now.getSeconds();
  second = second >= 10 ? second : `0${second}`;
  let millisecond = now.getMilliseconds();
  // eslint-disable-next-line no-nested-ternary
  millisecond =
    millisecond >= 100
      ? millisecond
      : millisecond >= 10
      ? `0${millisecond}`
      : `00${millisecond}`;
  return `${year}-${month}-${date} ${hour}:${minute}:${second}.${millisecond}`;
};

/**
 * 获取时间毫秒
 * @param {Number} timestamp - 时间戳
 * @returns {Number} 08:08:08.008
 */
const getTime = () => {
  const now = new Date();
  let hour = now.getHours();
  hour = hour >= 10 ? hour : `0${hour}`;
  let minute = now.getMinutes();
  minute = minute >= 10 ? minute : `0${minute}`;
  let second = now.getSeconds();
  second = second >= 10 ? second : `0${second}`;
  let millisecond = now.getMilliseconds();
  // eslint-disable-next-line no-nested-ternary
  millisecond =
    millisecond >= 100
      ? millisecond
      : millisecond >= 10
      ? `0${millisecond}`
      : `00${millisecond}`;
  return `${hour}:${minute}:${second}.${millisecond}`;
};

export { getDateTime, getTime };
