import Jellyfish from '../Jellyfish';

export interface IJellyfishState {
  jellyfish: Jellyfish;

  planula();
  polyp();
  polypColony();
  strobila();
  ephyra();
  adultJellyfish();
}
