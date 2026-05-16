export function pagePath(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return normalizedPath;
}
