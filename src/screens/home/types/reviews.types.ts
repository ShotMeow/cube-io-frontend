import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ReviewType {
  id: number;
  avatarSrc: StaticImport | null;
  name: string;
  nickname: string;
  text: string;
}
