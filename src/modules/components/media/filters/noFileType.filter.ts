
export const noFileType = () => (filename: string = ''): string => {
  const parts = filename.split('.');
  if (parts.length > 1) {
    return parts[0];
  }
  return '';
};