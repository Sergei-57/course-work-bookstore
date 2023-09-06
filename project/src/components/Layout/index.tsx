import { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { Main } from '../Main'
import { Footer } from '../Footer'
import { Container } from '../Container'

export function Layout(): ReactElement {
  return (
    <div className="layout">
      <Container>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Container>
    </div>
  )
}
