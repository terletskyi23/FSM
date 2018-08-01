import { IJellyfishState } from './interfaces';

import Jellyfish from '../Jellyfish';
import JellyfishState from './JellyfishState';

export default class PolypColonyState extends JellyfishState implements IJellyfishState {

  constructor(jellyfish: Jellyfish) {
    super('polyp colony', jellyfish);
  }

  public strobila(): void {
    console.groupCollapsed('> Grow up to strobila');
      console.log('> > > > > > >');
      console.log('do something.');
      console.log('< < < < < < <');
    console.groupEnd();

    this.jellyfish.state = this.jellyfish.strobilaState;
  }

}
