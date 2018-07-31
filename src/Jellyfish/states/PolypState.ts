import Jellyfish from '../Jellyfish';
import { IJellyfishState } from './interfaces';

export default class PolypState implements IJellyfishState {
  private _name = 'Polyp';
  private _jellyfish: Jellyfish;

  constructor(jellyfish: Jellyfish) {
    this._jellyfish = jellyfish;
  }

  public get name(): string {
    return this._name;
  }

  public planula(): void {
    console.warn('! Polyp cannot be transformed to planula');
  }

  public polyp(): void {
    console.warn('! Your jellyfish already on this polyp');
  }

  public polypColony(): void {
    console.groupCollapsed('> Grow up to polyp colony');
    console.log('> > > > > > >');
    console.log('do something.');
    console.log('< < < < < < <');
    console.groupEnd();

    this._jellyfish.state = this._jellyfish.polypColonyState;
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
    console.warn('! Polyp cannot be transformed to ephyra');
  }

  public adultJellyfish(): void {
    console.warn('! Polyp cannot be transformed to adult jellyfish');
  }

}
