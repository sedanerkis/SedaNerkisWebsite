export const SITE_URL = 'http://localhost:8080';

export function siteUrl(path = '/') {
  const baseUrl = SITE_URL.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${baseUrl}${normalizedPath}`;
}
