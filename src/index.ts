import Jellyfish from './Jellyfish/Jellyfish';

const j = new Jellyfish();

console.group('- - - - - Jellyfish - - - - -');

  console.info('= Current State: ', j.stateName);

  j.state.polyp();
  j.state.planula();

  console.info('= Current State: ', j.stateName);

  j.state.planula();
  j.state.planula();

  j.state.polyp();

  console.info('= Current State: ', j.stateName);

  j.state.strobila();
  j.state.ephyra();

  console.info('= Current State: ', j.stateName);

  j.state.adultJellyfish();

  console.info('= Current State: ', j.stateName);

  j.state.ephyra();
  j.state.polyp();

  console.info('= Current State: ', j.stateName);

  j.state.polypColony();

  console.info('= Current State: ', j.stateName);

console.groupEnd();
