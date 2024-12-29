
import { useLoaderData } from 'react-router-dom'

const Products = () => {
    const data = useLoaderData()
    console.log(data)
  return (
    <div>Products</div>
  )
}

export default Products