/**
 * param: 2023-11-25T14:19:59.702732
 * return: 2023. 11. 25. 14:19:59
 **/

export const parseDateTime = (dateTimeString: string) => {
  const date = new Date(dateTimeString);
  const timeString = date.toLocaleTimeString('en-US', { hour12: false });
  return `${date.toLocaleDateString()} ${timeString}`;
};
