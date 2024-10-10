import { configureAdapter } from '@unruggable/gateways';
import { USER_CONFIG } from './environment.mjs';

console.log("USER_CONFIG", USER_CONFIG);

// Lambda does not natively support the Request object from the Fetch API.
import { Request } from '@whatwg-node/fetch';

const serverAdapter = await configureAdapter(USER_CONFIG);

export const gatewayHandler = async (event, context) => {
  const request = new Request(`https://${event.headers.host}${event.path}`, {
    method: event.httpMethod,
    headers: event.headers,
    body: event.body,
  });

  const response = await serverAdapter(request);

  return {
    statusCode: response.status,
    headers: Object.fromEntries(response.headers.entries()),
    body: await response.text(),
  };
};