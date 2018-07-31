import { IJellyfishState } from './interfaces';

import Jellyfish from '../Jellyfish';

export default class EggState implements IJellyfishState {
  private _name = 'Egg';
  private _jellyfish: Jellyfish;

  constructor(jellyfish: Jellyfish) {
    this._jellyfish = jellyfish;
  }

  public get name(): string {
    return this._name;
  }

  public planula(): void {
    console.groupCollapsed('> Grow up to planula');
      console.log('> > > > > > >');
      console.log('do something.');
      console.log('< < < < < < <');
    console.groupEnd();

    this._jellyfish.state = this._jellyfish.planulaState;
  }

  public polyp(): void {
    console.warn('! Egg cannot be transformed to polyp');
  }

  public polypColony(): void {
    console.warn('! Egg cannot be transformed to polyp colony');
  }

  public strobila(): void {
    console.warn('! Egg cannot be transformed to strobila');
  }

  public ephyra(): void {
    console.warn('! Egg cannot be transformed to ephyra');
  }

  public adultJellyfish(): void {
    console.warn('! Egg cannot be transformed to adult jellyfish');
  }

}
