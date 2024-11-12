export interface Game {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  spread: string;
  overUnder: number;
  weather?: Weather;
}

export interface Team {
  id: string;
  name: string;
  city: string;
  record: string;
  injuries: Injury[];
}

export interface Injury {
  player: string;
  status: 'Out' | 'Questionable' | 'Probable';
  description: string;
}

export interface Weather {
  temperature: number;
  condition: string;
  windSpeed: number;
}

export interface DFSPlayer {
  id: string;
  name: string;
  team: string;
  position: string;
  salary: number;
  projectedPoints: number;
  value: number;
  opponent: string;
}

export interface BettingLine {
  id: string;
  type: 'spread' | 'moneyline' | 'total';
  homeTeam: string;
  awayTeam: string;
  line: string;
  odds: number;
}