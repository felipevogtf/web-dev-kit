export interface Menu {
  id?: number;
  icon: string;
  title: string;
  description?: string;
  link?: string;
  toggle?: boolean;
  childs?: Menu[];
}
