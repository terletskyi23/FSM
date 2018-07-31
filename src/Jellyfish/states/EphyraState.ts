import { IJellyfishState } from './interfaces';

import Jellyfish from '../Jellyfish';

export default class EphyraState implements IJellyfishState {
  private _name = 'Ephyra';
  private _jellyfish: Jellyfish;

  constructor(jellyfish: Jellyfish) {
    this._jellyfish = jellyfish;
  }

  public get name(): string {
    return this._name;
  }
  public planula(): void {
    console.warn('! Ephyra cannot be transformed to planula');
  }

  public polyp(): void {
    console.groupCollapsed('> Transform to polyp');
    console.log('> > > > > > >');
    console.log('do something.');
    console.log('< < < < < < <');
    console.groupEnd();

    this._jellyfish.state = this._jellyfish.polypState;
  }

  public polypColony(): void {
    console.warn('! Ephyra cannot be transformed to polyp colony');
  }

  public strobila(): void {
    console.warn('! Ephyra cannot be transformed to strobila');
  }

  public ephyra(): void {
    console.warn('! Your jellyfish already on this state');
  }

  public adultJellyfish(): void {
    console.groupCollapsed('> Grow up to adult jellyfish');
    console.log('> > > > > > >');
    console.log('do something.');
    console.log('< < < < < < <');
    console.groupEnd();

    this._jellyfish.state = this._jellyfish.adultJellyfishState;
  }

}
