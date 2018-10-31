import { JurisdictionSearchType } from './enums/jurisdiction-search-type.enum';

export class JurisdictionSearch {
  constructor(initialData: Partial<JurisdictionSearch> = null) {
    if (initialData != null) {
        Object.assign(this, initialData);
    }
  }
  id: string;
  name: string;
  type: JurisdictionSearchType;
}
