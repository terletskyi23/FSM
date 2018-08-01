import Jellyfish from '../Jellyfish';
import JellyfishState from './JellyfishState';

export default class PolypState extends JellyfishState {

  constructor(jellyfish: Jellyfish) {
    super('polyp', jellyfish);
  }

  public polypColony(): void {
    console.groupCollapsed('> Grow up to polyp colony');
      console.log('> > > > > > >');
      console.log('do something.');
      console.log('< < < < < < <');
    console.groupEnd();

    this.jellyfish.state = this.jellyfish.polypColonyState;
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
