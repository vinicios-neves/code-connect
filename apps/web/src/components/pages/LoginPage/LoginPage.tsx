import { AuthBanner } from '../../organisms/AuthBanner/AuthBanner'
import { LoginForm } from '../../organisms/LoginForm/LoginForm'
import { AuthTemplate } from '../../templates/AuthTemplate/AuthTemplate'

export function LoginPage() {
  function handleSubmit(data: { email: string; password: string; rememberMe: boolean }) {
    console.log('Login submitted:', data)
  }

  return (
    <AuthTemplate
      banner={<AuthBanner imageSrc="/banner-login.png" imageAlt="Mulher desenvolvedora no computador" />}
      form={<LoginForm onSubmit={handleSubmit} />}
    />
  )
}
