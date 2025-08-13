"use client"

import React from 'react'
import { useI18n } from './useI18n'
import { SupportedLanguage } from './I18nContext'

export function LanguageSwitcher(): React.JSX.Element {
  const { language, setLanguage } = useI18n()
  const isFR = language === 'fr'
  const nextLang: SupportedLanguage = isFR ? 'en' : 'fr'
  const label = isFR ? 'FR' : 'EN'
  const title = isFR ? 'Switch to English' : 'Basculer en français'
  const ariaLabel = title

  return (
    <button
      type="button"
      onClick={() => setLanguage(nextLang)}
      title={title}
      aria-label={ariaLabel}
      className="inline-flex items-center gap-1 h-9 px-3 rounded-full border border-black/10 bg-white/70 backdrop-blur text-xs font-medium shadow-sm hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 text-darkgreen cursor-pointer"
    >
      {label}
    </button>
  )
}


