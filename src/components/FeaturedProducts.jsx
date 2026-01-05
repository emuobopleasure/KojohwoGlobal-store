import ShopItem from './ShopItem'
import { AppContext } from '../context/appContext'
import { Link } from 'react-router-dom'
import products from '../ProductsData'

const FeaturedProducts = () => {
    // const { filteredProducts, isLoading } = useContext(AppContext)
    const featuredProducts = products.filter(p => p.featured)

    // const featured = filteredProducts.slice(0, 6)

    return (
        <section id="featuredProducts" className="featured-products px-[1.1rem] md:px-[2rem] lg:px-[3rem] mt-16 mb-[4rem]">
            <div className="section-header text-center mb-10">
                <h2 className="text-2xl font-bold text-gray-700">Featured Products</h2>
                <p className="text-gray-700 text-sm">A quick glance at our best picks</p>
            </div>


            <div className="grid grid-cols-2 gap-x-3 gap-y-7 md:flex flex-wrap justify-between">
                {featuredProducts.map((product) => (
                    <ShopItem key={product.id} item={product} />
                ))}
            </div>

            <div className="text-center mt-14">
                <Link to="/products">
                    <button className="btn btn-neutral rounded-full text-white border-none shadow-lg">
                        View All Products
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default FeaturedProducts
