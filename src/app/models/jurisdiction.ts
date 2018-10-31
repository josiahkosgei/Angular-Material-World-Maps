export class Jurisdiction {
  constructor(initialData: Partial<Jurisdiction> = null) {
    if (initialData != null) {
        Object.assign(this, initialData);
    }
  }
  id: string;
  country: string;
  region: string;
}
