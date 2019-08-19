export class DateService {

  static getDate(): string {
    const currentDate = new Date();
    const date = new Date(currentDate.setSeconds(currentDate.getSeconds() - 5));

    return date.toISOString();
  }

  static getMinutesAndSeconds(): string {
    const date = new Date(DateService.getDate());

    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
}
