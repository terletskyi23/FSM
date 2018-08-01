import Jellyfish from '../Jellyfish';
import JellyfishState from './JellyfishState';

export default class AdultJellyfishState extends JellyfishState {

  constructor(jellyfish: Jellyfish) {
    super('adult jellyfish', jellyfish);
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
