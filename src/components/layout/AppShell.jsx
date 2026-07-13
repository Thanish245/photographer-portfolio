function AppShell({ children }) {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      {children}
    </main>
  )
}

export default AppShell
