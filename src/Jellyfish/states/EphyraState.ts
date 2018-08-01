import Jellyfish from '../Jellyfish';
import JellyfishState from './JellyfishState';

export default class EphyraState extends JellyfishState {

  constructor(jellyfish: Jellyfish) {
    super('ephyra', jellyfish);
  }

  public polyp(): void {
    console.groupCollapsed('> Transform to polyp');
      console.log('> > > > > > >');
      console.log('do something.');
      console.log('< < < < < < <');
    console.groupEnd();

    this.jellyfish.state = this.jellyfish.polypState;
  }

  public adultJellyfish(): void {
    console.groupCollapsed('> Grow up to adult jellyfish');
      console.log('> > > > > > >');
      console.log('do something.');
      console.log('< < < < < < <');
    console.groupEnd();

    this.jellyfish.state = this.jellyfish.adultJellyfishState;
  }

}

