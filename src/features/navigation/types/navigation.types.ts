import { LinkType } from "@/shared/types/globals.types";

export interface NavigationItemType extends LinkType {
  inner?: NavigationItemType[];
}
