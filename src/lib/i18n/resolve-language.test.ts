import { resolveDisplayLanguage } from './resolve-language';

describe('resolveDisplayLanguage', () => {
  it('returns the stored language when one is selected', () => {
    expect(resolveDisplayLanguage('ar', 'en')).toBe('ar');
  });

  it('falls back to the resolved i18n language when nothing is stored', () => {
    expect(resolveDisplayLanguage(undefined, 'en')).toBe('en');
  });

  it('falls back when the stored value is empty', () => {
    expect(resolveDisplayLanguage('', 'en')).toBe('en');
  });

  it('returns undefined when neither is available', () => {
    expect(resolveDisplayLanguage(undefined, undefined)).toBeUndefined();
  });
});
