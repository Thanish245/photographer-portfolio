function AppShell({ children }) {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-16 outline-none">
      {children}
    </main>
  )
}

export default AppShell
