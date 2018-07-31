import { IJellyfishState } from './interfaces';

import Jellyfish from '../Jellyfish';

export default class PolypColonyState implements IJellyfishState {
  private _name = 'Polyp Colony';
  private _jellyfish: Jellyfish;

  constructor(jellyfish: Jellyfish) {
    this._jellyfish = jellyfish;
  }

  public get name(): string {
    return this._name;
  }
  public planula(): void {
    console.warn('! Polyp Colony cannot be transformed to planula');
  }

  public polyp(): void {
    console.warn('! Polyp Colony cannot be transformed to polyp');
  }

  public polypColony(): void {
    console.warn('! Your jellyfish already on this state');
  }

  public strobila(): void {
    console.groupCollapsed('> Grow up to strobila');
    console.log('> > > > > > >');
    console.log('do something.');
    console.log('< < < < < < <');
    console.groupEnd();

    this._jellyfish.state = this._jellyfish.strobilaState;
  }

  public ephyra(): void {
    console.warn('! Polyp Colony cannot be transformed to ephyra');
  }

  public adultJellyfish(): void {
    console.warn('! Polyp Colony cannot be transformed to adultJellyfish');
  }

}
