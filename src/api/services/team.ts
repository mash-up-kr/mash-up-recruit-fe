import { TeamsResponse } from '@/types/dto';
import BaseApiService from './base';

class TeamApiService extends BaseApiService {
  public constructor() {
    super('teams');
  }

  public getTeams(): Promise<TeamsResponse> {
    return this.http.get('').then(BaseApiService.handleResponse).catch(BaseApiService.handleError);
  }
}

export default new TeamApiService();
