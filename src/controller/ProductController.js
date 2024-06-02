const {BrandListService,CategoryListService,SliderListService,ListByBrandService,ListByCategoryService,ListBySimilarService,ListByKeywordService,ListByRemarkService,ReviewListService} = require("../services/ProductServices")


exports.BrandList=async(req,res)=>{
    let result= await BrandListService();
    return res.status(200).json(result)
}

exports.CategroyList=async(req,res)=>{
    let result= await CategoryListService();
    return res.status(200).json(result)
}

exports.SliderList=async(req,res)=>{
    let result= await SliderListService();
    return res.status(200).json(result)
}

exports.ListByBrand=async(req,res)=>{
    let result= await ListByBrandService(req);
    return res.status(200).json(result)

}

exports.ListByCategory=async(req,res)=>{
    let result= await ListByCategoryService(req);
    return res.status(200).json(result)
}

exports.ListBySimilar=async(req,res)=>{
    let result= await ListBySimilarService(req);
    return res.status(200).json(result)

}

exports.ListByKeyword=async(req,res)=>{
    let result= await ListByKeywordService(req);
    return res.status(200).json(result)

}

exports.ListByRemark=async(req,res)=>{
    let result= await ListByRemarkService(req);
    return res.status(200).json(result)

}

exports.ProductReviewList=async(req,res)=>{
    let result= await ReviewListService(req);
    return res.status(200).json(result)
}

exports.CreateProductReview=async(req,res)=>{

}



