export class Pilot {
  firstName: string;
  lastName: string;
  imageUrl: string;

  static defaultImage = '/assets/pictures/pilots/pilot-5.png';

  constructor(fullName: string, imageUrl = Pilot.defaultImage) {
    this.fullName = fullName;
    this.imageUrl = imageUrl;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value: string) {
    const values = value.split(' ');
    this.firstName = values[0];
    this.lastName = values[1];
  }
}
