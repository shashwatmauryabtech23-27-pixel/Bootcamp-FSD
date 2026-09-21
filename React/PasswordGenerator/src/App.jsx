import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let generatedPassword = ''
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) {
      characters += '0123456789'
    }

    if (characterAllowed) {
      characters += '!@#$%^&*()_+-=[]{}|;:,.<>?'
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      generatedPassword += characters.charAt(randomIndex)
    }

    setPassword(generatedPassword)
    setCopied(false)
  }, [length, numberAllowed, characterAllowed])

  const copyPasswordToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(password)

      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0, password.length)

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 1500)
    } catch (error) {
      console.error('Password copy nahi hua:', error)
    }
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <section className="w-full max-w-2xl">
        <h1 className="text-3xl sm:text-4xl text-center font-bold text-white mb-8">
          Password Generator
        </h1>

        <div className="bg-slate-800 rounded-2xl shadow-2xl p-5 sm:p-7">
          <div className="flex overflow-hidden rounded-xl border border-slate-600">
            <input
              type="text"
              value={password}
              placeholder="Your Password"
              readOnly
              ref={passwordRef}
              className="w-full min-w-0 bg-slate-700 text-orange-400 
                         text-lg sm:text-xl px-4 py-4 outline-none"
            />

            <button
              type="button"
              onClick={copyPasswordToClipboard}
              className={`shrink-0 px-5 sm:px-7 py-4 text-white 
                         font-medium transition-colors ${
                           copied
                             ? 'bg-green-600'
                             : 'bg-blue-600 hover:bg-blue-700'
                         }`}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-5 mt-7">
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="6"
                max="100"
                value={length}
                onChange={(event) =>
                  setLength(Number(event.target.value))
                }
                className="w-full sm:w-44 cursor-pointer accent-blue-500"
              />

              <label className="text-orange-400 whitespace-nowrap">
                Length: {length}
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="number"
                checked={numberAllowed}
                onChange={(event) =>
                  setNumberAllowed(event.target.checked)
                }
                className="w-4 h-4 cursor-pointer accent-blue-500"
              />

              <label
                htmlFor="number"
                className="text-orange-400 cursor-pointer"
              >
                Numbers
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="character"
                checked={characterAllowed}
                onChange={(event) =>
                  setCharacterAllowed(event.target.checked)
                }
                className="w-4 h-4 cursor-pointer accent-blue-500"
              />

              <label
                htmlFor="character"
                className="text-orange-400 cursor-pointer"
              >
                Characters
              </label>
            </div>
          </div>

          <button
            type="button"
            onClick={passwordGenerator}
            className="w-full mt-7 bg-orange-500 hover:bg-orange-600 
                       text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Generate New Password
          </button>
        </div>
      </section>
    </main>
  )
}

export default App