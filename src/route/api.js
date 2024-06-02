const express = require('express')
const CartListController = require("../controller/CartListController")
const ProductController = require("../controller/ProductController")


const router= express.Router();

router.get("/ProductBrandList", ProductController.BrandList)

router.get('/ProductCategoryList', ProductController.CategroyList)

router.get('/ProductSliderList', ProductController.SliderList)

router.get('/ProductListByBrand/:BrandID', ProductController.ListByBrand)

router.get('/ProductListByCategory/:CategoryID', ProductController.ListByCategory)

router.get('/ProductListBySmilier/:CategoryID', ProductController.ListBySimilar)

router.get('/ProductListByKeyword/:Keyword', ProductController.ListByKeyword)

router.get('/ProductListByRemark/:Remark', ProductController.ListByRemark)

router.get('/ProductDetails/:ProductID')

router.get('/ProductReviewList/:ProductID', ProductController.ProductReviewList )

router.get('/UserOTP/:email')

router.get('/VerifyLogin/:email/:otp')

router.get('/UserLogout')

router.post('/CreateProfile')

router.post('/UpdateProfile')

router.get('/ReadProfile')

router.post('/SaveWishList')

router.post('/RemoveWishList')

router.get('/WishList')

router.post('/SaveCartList')

router.post('/RemoveCartList')

router.get('/CartList', )




module.exports=router;