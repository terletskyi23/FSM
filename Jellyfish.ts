import { IJellyfishState } from './jellyfish-states/interfaces';

export default class Jellyfish {
  public currentState: IJellyfishState;

  constructor() {

  }

  public set State(state: IJellyfishState) {
    this.currentState = state;
  }

  public get State(): IJellyfishState {
    return this.currentState;
  }
}
