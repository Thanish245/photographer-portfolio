import { Component } from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Container from '../ui/Container'
import logger from '../../utils/logger'

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    logger.error('[ErrorBoundary] unhandled render error', error, errorInfo)
  }

  handleReload = () => {
    window.location.assign('/')
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <Container className="flex min-h-screen items-center py-16">
        <Card variant="elevated" className="mx-auto max-w-2xl space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Something went wrong</p>
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            This page hit an unexpected error.
          </h1>
          <p className="text-base leading-7 text-slate-300">
            Try reloading the page. If the problem continues, please reach out via the contact page.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button type="button" size="lg" onClick={this.handleReload}>
              Back to home
            </Button>
          </div>
        </Card>
      </Container>
    )
  }
}

export default ErrorBoundary
