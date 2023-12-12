export class UserNotFoundError extends Error {
  constructor(id = " ") {
    super(message);
    this.name = "UserNotFoundError";
  }
}