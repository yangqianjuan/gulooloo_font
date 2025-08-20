export type ActiveTab = "all" | "productivity" | "busniess" | "wellness";
export type BlogTabItem = {
  key: ActiveTab;
  label: string;
};
export type BlogTabProps = {
  activeTab: string;
  list: BlogTabItem[];
  handleTabChange: (key: ActiveTab) => void;
};
