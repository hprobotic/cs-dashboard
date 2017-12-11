// @flow
import { sleep } from '../utils';
import { Stripe, Endpoint } from '../constants';

export const stripe = (
  path: string = '',
  body: ?Object = undefined,
  method: string = 'GET'
) => {
  return new Promise((resolve, reject) => {
    sleep(2000);
    fetch(Stripe.root + Endpoint[path], { method, body })
      .then(response => resolve(response.json()))
      .catch(error => reject(error));
  });
};
