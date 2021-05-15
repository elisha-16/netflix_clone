import React, { useEffect, useState } from 'react'
import "./PlansScreen.css"

function PlansScreen() {
    const [products, setProducts] = useState([]);
   // const dispatch = useDispatch();

    useEffect(() => {
      db.collection('products').where('active','==',true)
      .get().then(querySnapshot => {
        const products = {};
        querySnapshot.forEach(async productDoc => {
            products[productDoc.id] = productDoc.data();
            const priceSnap = await product.ref.collection('prices').get();
            priceSnap.docs.forEach(doc => {
                products[productDoc.id].prices = {
                    priceId: priceSnap.id,
                    priceData: priceSnap.data()
                }
            })
        })
        setProducts(products);
      });
    }, []);

    console.log(products);
    return (
        <div className='plansScreen'>
            {Object.entries(products).map(([productId, productData]) => {

            })
            }
        </div>
    )
}

export default PlansScreen;
