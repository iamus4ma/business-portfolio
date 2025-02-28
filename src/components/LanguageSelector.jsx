import { useState } from "react"
import { Globe } from "lucide-react"

const languages = [
  { code: "en", name: "English" },
  { code: "zh", name: "中文" },
  { code: "ar", name: "العربية" },
]

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState("en")

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 bg-white px-4 py-2 rounded-md shadow-lg border"
        >
          <Globe className="h-4 w-4" />
          <span>{languages.find((lang) => lang.code === currentLang)?.name}</span>
        </button>

        {isOpen && (
          <div className="absolute bottom-full mb-2 right-0 bg-white rounded-md shadow-lg border">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setCurrentLang(lang.code)
                  setIsOpen(false)
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-md last:rounded-b-md"
              >
                {lang.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

