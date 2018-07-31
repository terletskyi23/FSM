import { IJellyfishState } from './interfaces';

import Jellyfish from '../Jellyfish';

export default class PlanulaState implements IJellyfishState {
  private _name = 'Planula';
  private _jellyfish: Jellyfish;

  constructor(jellyfish: Jellyfish) {
    this._jellyfish = jellyfish;
  }

  public get name(): string {
    return this._name;
  }

  public planula(): void {
    console.warn('! Your jellyfish already on this state');
  }

  public polyp(): void {
    console.groupCollapsed('> Grow up to polyp');
    console.log('> > > > > > >');
    console.log('do something.');
    console.log('< < < < < < <');
    console.groupEnd();

    this._jellyfish.state = this._jellyfish.polypState;
  }

  public polypColony(): void {
    console.warn('! Planula cannot be transformed to polyp colony');
  }

  public strobila(): void {
    console.warn('! Planula cannot be transformed to strobila');
  }

  public ephyra(): void {
    console.warn('! Planula cannot be transformed to ephyra');
  }

  public adultJellyfish(): void {
    console.warn('! Planula cannot be transformed to adult jellyfish');
  }
}
