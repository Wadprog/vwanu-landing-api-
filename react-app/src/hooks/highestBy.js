import _ from 'lodash';

const highestBy = (array, iteratee) => {
  if (!array.length) return ['NO-Name', '0'];
  const counts = _.countBy(array, iteratee);
  const pairs = _.toPairs(counts);
  return _.maxBy(pairs, (p) => p[1]);
};

export default highestBy;
