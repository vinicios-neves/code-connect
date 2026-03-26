import { AuthBanner } from '../../organisms/AuthBanner/AuthBanner'
import { SignupForm } from '../../organisms/SignupForm/SignupForm'
import { AuthTemplate } from '../../templates/AuthTemplate/AuthTemplate'

export function SignupPage() {
  function handleSubmit(data: { name: string; email: string; password: string; rememberMe: boolean }) {
    console.log('Signup submitted:', data)
  }

  return (
    <AuthTemplate
      banner={<AuthBanner imageSrc="/banner-cadastro.png" imageAlt="Mulher desenvolvedora com óculos futuristas" />}
      form={<SignupForm onSubmit={handleSubmit} />}
    />
  )
}
