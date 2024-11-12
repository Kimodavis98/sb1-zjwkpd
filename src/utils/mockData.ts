import type { Game, Team, DFSPlayer, BettingLine } from '../types';

export const mockGames: Game[] = [
  {
    id: '1',
    homeTeam: {
      id: '1',
      name: 'Lakers',
      city: 'Los Angeles',
      record: '34-24',
      injuries: [
        {
          player: 'Anthony Davis',
          status: 'Questionable',
          description: 'Left knee soreness'
        }
      ]
    },
    awayTeam: {
      id: '2',
      name: 'Warriors',
      city: 'Golden State',
      record: '32-26',
      injuries: []
    },
    date: '2024-03-20',
    spread: 'LAL -5.5',
    overUnder: 224.5,
    weather: {
      temperature: 72,
      condition: 'Clear',
      windSpeed: 8
    }
  }
];

export const mockDFSPlayers: DFSPlayer[] = [
  {
    id: '1',
    name: 'LeBron James',
    team: 'LAL',
    position: 'SF',
    salary: 10800,
    projectedPoints: 52.3,
    value: 4.84,
    opponent: 'GSW'
  },
  {
    id: '2',
    name: 'Stephen Curry',
    team: 'GSW',
    position: 'PG',
    salary: 10200,
    projectedPoints: 48.5,
    value: 4.75,
    opponent: 'LAL'
  }
];

export const mockBettingLines: BettingLine[] = [
  {
    id: '1',
    type: 'spread',
    homeTeam: 'Lakers',
    awayTeam: 'Warriors',
    line: '-5.5',
    odds: -110
  },
  {
    id: '2',
    type: 'total',
    homeTeam: 'Lakers',
    awayTeam: 'Warriors',
    line: 'o224.5',
    odds: -105
  }
];