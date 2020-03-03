export default interface IRow {
  key: string;
  name: string;
  dlc: string | null;
  health: number;
  hunger: number;
  sanity: number;
  perishTime: number;
}
