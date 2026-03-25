import { useState } from 'react'
import { Button } from '../../atoms/Button/Button'
import { Checkbox } from '../../atoms/Checkbox/Checkbox'
import { Divider } from '../../atoms/Divider/Divider'
import { Link } from '../../atoms/Link/Link'
import { SocialButton } from '../../atoms/SocialButton/SocialButton'
import { FormField } from '../../molecules/FormField/FormField'

interface LoginFormData {
  email: string
  password: string
  rememberMe: boolean
}

interface LoginFormProps {
  onSubmit?: (data: LoginFormData) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSubmit?.({ email, password, rememberMe })
  }

  return (
    <div className="flex flex-col gap-6 p-8 w-full">
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">Login</h1>
        <p className="text-gray-400 text-sm">Boas-vindas! Faça seu login.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        <FormField
          label="Email ou usuário"
          id="email"
          type="email"
          placeholder="usuario123"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormField
          label="Senha"
          id="password"
          type="password"
          placeholder="••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-center justify-between">
          <Checkbox
            id="remember-me"
            label="Lembrar-me"
            checked={rememberMe}
            onChange={setRememberMe}
          />
          <Link to="/forgot-password" variant="default" className="text-sm">
            Esqueci a senha
          </Link>
        </div>

        <Button type="submit">
          Login →
        </Button>
      </form>

      <Divider text="ou entre com outras contas" />

      <div className="flex justify-center gap-4">
        <SocialButton icon="/github.png" alt="GitHub logo" label="Github" />
        <SocialButton icon="/gmail.png" alt="Gmail logo" label="Gmail" />
      </div>

      <p className="text-center text-sm text-gray-400">
        Ainda não tem conta?{' '}
        <Link to="/signup" variant="highlight">
          Crie seu cadastro! 📋
        </Link>
      </p>
    </div>
  )
}
