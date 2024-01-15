import { SortTypes } from "./enums";

export const SortOptions = [
  { key: SortTypes.FirstNameAsc, label: "First Name Ascending" },
  { key: SortTypes.FirstNameDsc, label: "First Name Descending" },
  { key: SortTypes.lastNameAsc, label: "Last Name Ascending" },
  { key: SortTypes.LastNameDsc, label: "Last Name Descending" },
  { key: SortTypes.EmailAsc, label: "Email Ascending" },
  { key: SortTypes.EmailDsc, label: "Email Descending" },
  { key: SortTypes.PhoneNumberAsc, label: "Phone Number Ascending" },
  { key: SortTypes.PhoneNumberDsc, label: "Phone Number Descending" },
  { key: SortTypes.GenderAsc, label: "Gender Ascending" },
  { key: SortTypes.GenderDsc, label: "Gender Descending" },
];
