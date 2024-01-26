import { TeamsRequest, TeamsResponse } from '@/types/dto';
import BaseApiService from './base';

class TeamApiService extends BaseApiService {
  public constructor() {
    super('teams');
  }

  public getTeams({ accessToken, generationNumber }: TeamsRequest): Promise<TeamsResponse> {
    return this.http
      .get(`?generationNumber=${generationNumber}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
  }
}

export default new TeamApiService();
