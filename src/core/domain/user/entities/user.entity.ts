export class UserEntity {
  id: string;
  display_name: string;
  email: string;
  name: string;

  constructor(id: string, display_name: string, email: string, name: string) {
    this.id = id;
    this.display_name = display_name;
    this.email = email;
    this.name = name;
  }
}
