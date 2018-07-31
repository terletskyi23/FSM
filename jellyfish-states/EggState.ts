import Jellyfish from '../Jellyfish';
import { IJellyfishState } from './interfaces';

export default class EggState implements IJellyfishState {
  public jellyfish: Jellyfish;

  public planula(): void {
    throw new Error('Not implemented');
  }

  public polyp(): void {
    throw new Error('Not implemented');
  }

  public polypColony(): void {
    throw new Error('Not implemented');
  }

  public strobila(): void {
    throw new Error('Not implemented');
  }

  public ephyra(): void {
    throw new Error('Not implemented');
  }

  public adultJellyfish(): void {
    throw new Error('Not implemented');
  }

}