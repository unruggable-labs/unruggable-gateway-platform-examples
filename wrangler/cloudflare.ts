import { configureAdapter, UserConfig } from '@unruggable/gateways';
export default {
  async fetch(request, env) {
    
    const serverAdapter = await configureAdapter(env as UserConfig);

    try {
      request['CONFIG'] = env;
      const resp = await serverAdapter(request);
      return resp;
    } catch (err) {
      return new Response(`Error: ${err.message}`, { status: 500 });
    }
  },
};
