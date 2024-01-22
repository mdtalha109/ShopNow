import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { createProduct } from "../../../../actions/productAction"
import { toast } from "react-toastify"

const useAddProduct = () => {
    const [productName, setProductName] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productImage, setProductImage] = useState('')
    const [productBrand, setProductBrand] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [countInStock, setCountInStock] = useState('')

    const [product, setProduct] = useState({
        name: null,
        category: null,
        image: null,
        brand: null,
        price: null,
        description: null,
        countInStock: null,
    })

    const dispatch = useDispatch();

    const addProductHandler = async () => {

        if (!product.name) {
            toast.error('Please enter product name');
            return
        }

        if (!product.category) {
            toast.error('Please enter product category');
            return
        }

        if (!product.image) {
            toast.error('Please upload product image');
            return
        }

        if (!product.brand) {
            toast.error('Please enter product brand name');
            return
        }

        if (!product.price) {
            toast.error('Please enter product price');
            return
        }

        if (!product.description) {
            toast.error('Please enter product description');
            return
        }

        if (!product.countInStock) {
            toast.error('Please enter quantity present in stock');
            return
        }

        dispatch(createProduct(
            product.name,
            product.category,
            product.image,
            product.brand,
            product.price,
            product.description,
            product.countInStock
        ));

        toast.success('Prduct successfully added in your inventory')
    }


    const ImageHanlder = (pic) => {
        if (pic === undefined) {
            alert('Image not uploaded')
            return
        }

        if (pic.type === "Image/jpeg" || "Image/png" || "Image/webp") {
            const data = new FormData()
            data.append("file", pic)
            data.append("upload_preset", "shopNow")
            data.append("cloud_name", "talhapro321")
            fetch("https://api.cloudinary.com/v1_1/talhapro321/image/upload", {
                method: "POST",
                body: data
            }).then((res) => res.json())
                .then(data => {
                    console.log(data)
                    setProductImage(data.url.toString())
                    console.log(data)

                })
                .catch((err) => {
                    console.log(err)

                })
        } else {
            alert('something went wrong')
        }
    }
    return {
        product, 
        setProduct,
        addProductHandler,
        ImageHanlder
    }
}

export default useAddProduct