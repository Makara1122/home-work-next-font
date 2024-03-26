'use client'
import { CardProdaaaak } from '@/components/CardProduct';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


export default function CardProducts() {
    const [products, setProduct] = useState([])
    const router = useRouter();
    const url = "https://fakestoreapi.com/products";
    useEffect(()=>{ fetch(url).
        then(res => res.json()).
        then(data => setProduct(data))}
    ,[]);
    return (
        products.map(product => (
            <CardProdaaaak onClick={()=> router.push(`/service/${product.id}`)} image={product.image} price={product.price}  description={product.description} />
        ))
    )
}
