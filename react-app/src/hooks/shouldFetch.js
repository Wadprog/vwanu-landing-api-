import differenceInSeconds from 'date-fns/differenceInSeconds';
const FETCH_DELAY_IN_SECOND = 30;

export default function shouldFetch(
  lastFetch,
  nextFetch = FETCH_DELAY_IN_SECOND
) {
  return differenceInSeconds(new Date(), lastFetch) >= nextFetch;
}
