export const SITE_URL = 'sedanerkis.com';

export function siteUrl(path = '/') {
  const baseUrl = SITE_URL.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${baseUrl}${normalizedPath}`;
}
