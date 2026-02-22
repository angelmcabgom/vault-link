export class EmptyResultError extends Error {
  readonly type = 'EmptyResultError';

  constructor(message = 'Query returned no results') {
    super(message);
  }
}
