import '../../styles/App.scss'
// import { Provider } from 'react-redux'
// import { store } from '../redux/store'
// import { router } from '../router'
// import { RouterProvider } from 'react-router-dom'
import { Layout } from '../Layout'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Subscribe } from '../Subscribe'

export function App() {
  return (
    // <Provider store={store}>
    //   <RouterProvider router={router} />
    // </Provider>
    <div>
      <Layout>
        <Header />
        <Footer />
        <Subscribe />
      </Layout>
    </div>
  )
}
