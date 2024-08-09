import React, { useEffect, useState } from 'react';
import Categories from '../../components/Categories/Categories.js';


import CategoriesProduct from '../../components/CategoriesProduct/CategoriesProduct.js';

import styles from './index.module.css'

const HomeScreen = () => {

    return (
       <>
            <main className={styles.homeContainer}>
                    <Categories/>
                
                <div>
                    <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/31/a6a1bba2-d8af-4feb-881d-325bd8545c071617211308576-Dk-banner.jpg" style={{maxWidth:"100%"}}/>
                </div>


                <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>
                    <CategoriesProduct categoryName='Electronics' Limit='6' heading="Electronics"/>
                    <CategoriesProduct categoryName='Footwear' Limit='6' heading="Footwear"/>
                </div>
            </main>
            
            
 
          
            

       </>
    )
}

export default HomeScreen


               
