import { IJellyfishState } from './states/interfaces';

import EggState from './states/EggState';
import PlanulaState from './states/PlanulaState';
// import PolypState from './states/PolypState';
// import PolypColonyState from './states/PolypColonyState';
// import StrobilaState from './states/StrobilaState';
// import EphyraState from './states/EphyraState';
// import AdultJellyfishState from './states/AdultJellyfishState';

export default class Jellyfish {
  private _currentState: IJellyfishState;

  public eggState: IJellyfishState;
  public planulaState: IJellyfishState;
  // public polypState: IJellyfishState;
  // public polypColonyState: IJellyfishState;
  // public strobilaState: IJellyfishState;
  // public ephyraState: IJellyfishState;
  // public adultJellyfishState: IJellyfishState;

  constructor() {
    this.eggState = new EggState(this);
    this.planulaState = new PlanulaState(this);
    // this.polypState = new PolypState(this);
    // this.polypColonyState = new PolypColonyState(this);
    // this.strobilaState = new StrobilaState(this);
    // this.ephyraState = new EphyraState(this);
    // this.adultJellyfishState = new AdultJellyfishState(this);

    // refactor
    this.state = this.eggState;
  }

  public set state(state: IJellyfishState) {
    this._currentState = state;
  }

  public get state(): IJellyfishState {
    return this._currentState;
  }

  public get stateName(): string {
    return this._currentState.name;
  }

  // SOME BUSINESS LOGIC
  // ...

}
