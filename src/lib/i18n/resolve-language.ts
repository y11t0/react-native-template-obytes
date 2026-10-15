export function resolveDisplayLanguage(
  stored: string | undefined,
  resolved: string | undefined,
): string | undefined {
  return stored || resolved;
}
