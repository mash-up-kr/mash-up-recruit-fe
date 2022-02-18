import { BaseResponse } from '@/types/dto/base';

export interface Team {
  name: string;
  teamId: number;
}

export interface TeamsResponseData extends Array<Team> {}

export interface TeamsResponse extends BaseResponse<TeamsResponseData> {}
