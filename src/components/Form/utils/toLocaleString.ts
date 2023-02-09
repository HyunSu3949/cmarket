export function toLocaleString(number: number | string) {
  return `${Number(number).toLocaleString("ko-KR")}`;
}
