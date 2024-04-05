import { AutoMap } from "@automapper/classes";

export class UserSummaryResponse {
  @AutoMap()
  public id: string;

  @AutoMap()
  public name: string;

  @AutoMap()
  public email: string;

  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
