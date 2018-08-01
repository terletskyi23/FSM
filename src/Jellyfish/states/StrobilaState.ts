import { IJellyfishState } from './interfaces';

import Jellyfish from '../Jellyfish';
import JellyfishState from './JellyfishState';

export default class StrobilaState extends JellyfishState implements IJellyfishState {

  constructor(jellyfish: Jellyfish) {
    super('strobila', jellyfish);
  }

  public ephyra(): void {
    console.groupCollapsed('> Transform to ephyra');
    console.log('> > > > > > >');
    console.log('do something.');
    console.log('< < < < < < <');
    console.groupEnd();

    this.jellyfish.state = this.jellyfish.ephyraState;
  }

}
