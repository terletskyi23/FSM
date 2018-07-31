import Jellyfish from '../Jellyfish';

export interface IJellyfishState {
  name: string;

  planula();
  polyp();
  polypColony();
  strobila();
  ephyra();
  adultJellyfish();
}
