import { useNavigate } from "react-router-dom"
import { ChevronLeft, Globe } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useState } from "react"

type SiteHeaderProps = {
  showBackButton?: boolean
  title?: string
  subtitle?: string
}

const languages = [
  { code: 'en', name: 'English' },
  { code: 'tagalog', name: 'Tagalog' },
  { code: 'hindi', name: 'हिंदी' },
  { code: 'mandarin', name: '普通话' },
  { code: 'tongan', name: 'lea faka-Tonga' },
]

export const SiteHeader = ({ showBackButton = false, title = 'AIM', subtitle = 'Grievance Portal' }: SiteHeaderProps) => {
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0]

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-card">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          {showBackButton && (
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="size-4" />
              Back
            </button>
          )}
          {showBackButton && <span className="text-border">|</span>}
          <div className="min-w-0">
            <p className="text-sm font-bold uppercase tracking-widest text-foreground">{title}</p>
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          </div>
        </div>

        {/* Language Selector Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
          >
            <Globe className="size-4" />
            <span>{currentLang.name}</span>
          </button>

          {isOpen && (
            <>
              {/* Backdrop to close dropdown */}
              <div
                className="fixed inset-0"
                onClick={() => setIsOpen(false)}
              />
              {/* Dropdown menu */}
              <div className="absolute right-0 mt-2 w-48 rounded-lg border border-border bg-card shadow-lg z-20">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code)
                      setIsOpen(false)
                    }}
                    className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                      lang.code === i18n.language
                        ? 'bg-primary/10 text-foreground font-medium'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    } first:rounded-t-lg last:rounded-b-lg`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
