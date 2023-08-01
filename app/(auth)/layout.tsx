import { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    // efeitos de fundo
    <div className="flex items-center justify-center h-full bg-gradient-to-tr from-zinc-800 to-zinc-400">
      {children}
    </div>
  )
}

export default AuthLayout
