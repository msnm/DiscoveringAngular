import {Inject, Injectable} from '@angular/core';
import {SessionI} from '../../shared/event.model';

@Injectable()
export class  VoterService {
  deleteVoter(session: SessionI, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  addVoter(session: SessionI, voterName: string) {
    session.voters.push(voterName);
  }

  userHasVoted(session: SessionI, voterName: string) {
    return session.voters.some(voter => voter === voterName);
  }
}
