import { IJellyfishState } from './interfaces';

import Jellyfish from '../Jellyfish';

export default class StrobilaState implements IJellyfishState {
  private _name = 'Strobila';
  private _jellyfish: Jellyfish;

  constructor(jellyfish: Jellyfish) {
    this._jellyfish = jellyfish;
  }

  public get name(): string {
    return this._name;
  }
  public planula(): void {
    console.warn('! Strobila cannot be transformed to planula');
  }

  public polyp(): void {
    console.warn('! Strobila cannot be transformed to polyp');
  }

  public polypColony(): void {
    console.warn('! Strobila cannot be transformed to polyp colony');
  }

  public strobila(): void {
    console.warn('! Your jellyfish already on this state');
  }

  public ephyra(): void {
    console.groupCollapsed('> Transform to ephyra');
    console.log('> > > > > > >');
    console.log('do something.');
    console.log('< < < < < < <');
    console.groupEnd();

    this._jellyfish.state = this._jellyfish.ephyraState;
  }

  public adultJellyfish(): void {
    console.warn('! Strobila cannot be transformed to adult jellyfish');
  }

}
