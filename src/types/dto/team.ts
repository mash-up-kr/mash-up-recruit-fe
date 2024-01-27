import { BaseRequest, BaseResponse } from '@/types/dto/base';

export type TeamName = 'Design' | 'Web' | 'Android' | 'iOS' | 'Node' | 'Spring';
export interface Team {
  name: TeamName;
  teamId: number;
}

export interface TeamsResponseData extends Array<Team> {}

export interface TeamsRequest extends BaseRequest {
  generationNumber: number;
}
export interface TeamsResponse extends BaseResponse<TeamsResponseData> {}
