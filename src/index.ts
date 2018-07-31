import Jellyfish from './Jellyfish/Jellyfish';

const j = new Jellyfish();

console.group('- - Jellyfish - -');

  console.info('= Current State: ', j.stateName);

  j.state.polyp();
  j.state.planula();

  console.info('= Current State: ', j.stateName);

  j.state.planula();

console.groupEnd();
