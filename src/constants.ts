export const USE_AUTH = true;
const nodeEnv = import.meta.env.VITE_NODE_ENV;
export const API_BASE_URL = nodeEnv === 'development' ? 'http://localhost:3000' : "https://shop-api-production-ce05.up.railway.app";
export const ACCESS_TOKEN = 'ACCESS_TOKEN';
