import type BasicDropdown from "ember-basic-dropdown/components/basic-dropdown";
import type BasicDropdownContent from "ember-basic-dropdown/components/basic-dropdown-content";
import type BasicDropdownTrigger from "ember-basic-dropdown/components/basic-dropdown-trigger";

export default interface EmberBasicDropdownRegistry {
  'basic-dropdown': typeof BasicDropdown;
  'BasicDropdown': typeof BasicDropdown;
  'basic-dropdown-content': typeof BasicDropdownContent;
  'BasicDropdownContent': typeof BasicDropdownContent;
  'basic-dropdown-trigger': typeof BasicDropdownTrigger;
  'BasicDropdownTrigger': typeof BasicDropdownTrigger;
}
