import './App.css'
import Container from "@/components/container.tsx";
import Products from "@/components/products.tsx";
import Cart from "@/components/cart.tsx";
import {useEffect, useState} from "react";
import type {Dessert} from "@/types/products.ts";
import CartItems from "@/components/cart-items.tsx";
import ProductItem from "@/components/product-item.tsx";

function App() {
    const [products, setProducts] = useState<Dessert[]>([])

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch('http://localhost:3000/desserts')
            const data = await response.json()
            setProducts(data)
        }

        fetchProducts()
    }, []);

    return (
        <main>
            <Container>
                <div className='grid grid-cols-[8fr_4fr] max-lg:grid-cols-1 gap-8'>
                    <Products>
                        {products.map(
                            (product) => (
                                <ProductItem key={product.name} product={product}/>
                            ))}
                    </Products>
                    <Cart>
                        {/*<CartEmpty/>*/}
                        <CartItems/>
                    </Cart>
                </div>
            </Container>
        </main>
    )
}

export default App
