export interface PilotAttrs {
  id: number,
  firstName: string,
  lastName: string,
  imageUrl: string
}

export class Pilot {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;

  static defaultImage = '/assets/pictures/pilots/pilot-5.png';

  constructor(attrs: Partial<PilotAttrs> = {}) {
    this.id = attrs.id;
    this.firstName = attrs.firstName;
    this.lastName = attrs.lastName;
    this.imageUrl = attrs.imageUrl || Pilot.defaultImage;
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
