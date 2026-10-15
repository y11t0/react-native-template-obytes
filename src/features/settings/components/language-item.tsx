import type { OptionType } from '@/components/ui';

import type { Language } from '@/lib/i18n/resources';
import i18n from 'i18next';
import * as React from 'react';
import { Options, useModal } from '@/components/ui';
import { translate, useSelectedLanguage } from '@/lib/i18n';
import { resolveDisplayLanguage } from '@/lib/i18n/resolve-language';

import { SettingsItem } from './settings-item';

export function LanguageItem() {
  const { language, setLanguage } = useSelectedLanguage();
  const modal = useModal();
  const onSelect = React.useCallback(
    (option: OptionType) => {
      setLanguage(option.value as Language);
      modal.dismiss();
    },
    [setLanguage, modal],
  );

  const langs = React.useMemo(
    () => [
      { label: translate('settings.english'), value: 'en' },
      { label: translate('settings.arabic'), value: 'ar' },
    ],
    [],
  );

  const selectedLanguage = React.useMemo(
    () => {
      const current = resolveDisplayLanguage(language, i18n.resolvedLanguage);
      return langs.find(lang => lang.value === current);
    },
    [language, langs],
  );

  return (
    <>
      <SettingsItem
        text="settings.language"
        value={selectedLanguage?.label}
        onPress={modal.present}
      />
      <Options
        ref={modal.ref}
        options={langs}
        onSelect={onSelect}
        value={selectedLanguage?.value}
      />
    </>
  );
}
