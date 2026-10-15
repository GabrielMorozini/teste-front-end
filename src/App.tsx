import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Categories from './components/categories/Categories'
import ProductList from './components/productList/ProductList'
import Partners from './components/partners/Partners'
import Brands from './components/brands/Brands'
import Footer from './components/footer/Footer'

const relatedTabs = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']

const brands = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  name: 'Econverse',
  logo: './logo.svg',
}))

function App() {
  return (
    <>
      <Header />
      <main>
          <Hero />
        <Categories />
        <ProductList title="Produtos relacionados" tabs={relatedTabs} />
        <Partners />
        <Brands brands={brands} />
        <ProductList title="Produtos relacionados" viewAllHref="#" flat />
      </main>
      <Footer />
    </>
  )
}

export default App