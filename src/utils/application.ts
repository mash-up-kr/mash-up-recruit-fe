import { Application } from '@/types/dto';

export const sortByGenerationAndTeam = (applications: Application[]) => {
  const copyApplications = [...applications];

  copyApplications.sort(
    ({ team: teamA }, { team: teamB }) => teamA.name.charCodeAt(0) - teamB.name.charCodeAt(0),
  );
  copyApplications.sort(
    (
      { generationResponse: { generationNumber: generationNumberA } },
      { generationResponse: { generationNumber: generationNumberB } },
    ) => generationNumberB - generationNumberA,
  );
  return copyApplications;
};
