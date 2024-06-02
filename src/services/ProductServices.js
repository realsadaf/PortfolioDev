const BrandModel = require('../model/BrandModel')
const ProductModel = require("../model/ProductModel")
const CategoryModel = require("../model/CategoryModel")
const ProductSliderModel = require("../model/ProductSliderModel")


const mongoose= require("mongoose")
const ObjectId= mongoose.Types.ObjectId;

const BrandListService = async () => {
    
    try{    
        let data = await BrandModel.find();
        return {status:"success", data:data}

    }
    catch(err){
        return {status:"fail", err:err}.toString()
    }

}

const CategoryListService = async () => {
    try{    
        let data = await CategoryModel.find();
        return {status:"success", data:data}

    }
    catch(err){
        return {status:"fail", err:err}.toString()
    }
}


const SliderListService = async () => {
    try{    
        let data = await ProductSliderModel.find();
        return {status:"success", data:data}

    }
    catch(err){
        return {status:"fail", err:err}.toString()
    }
}

const ListByBrandService = async (req) => {
    let BrandID = ObjectId(req.params.BrandID);
    let matchStage= {$match:{brandID:BrandID}};
    let joinwbrandStage = {$lookup:{from:"brands",localfield:"brandID", foreignField:"_id", as:"brand"}};
    let joinwcategoryStage = {$lookup:{from:"categories",localfield:"categoryID", foreignField:"_id", as:"category"}};
    let UnwindBrandStage = {$unwind:"$brand"} 
    let UnwindCategoryStage = {$unwind:"$category"} 

    let data = await ProductModel.aggregate([
        matchStage,
        joinwbrandStage,
        joinwcategoryStage,
        UnwindBrandStage,
        UnwindCategoryStage
    ])
    return {status:"success", data:data}
}


const ListByCategoryService = async (req) => {
    try{
        let CategoryID =new ObjectId(req.params.CategoryID);
        let matchStage= {$match:{categoryID:CategoryID}};


        let joinwbrandStage = {$lookup:{from:"brands",localField:"brandID", foreignField:"_id", as:"brand"}};
        let joinwcategoryStage = {$lookup:{from:"categories",localField:"categoryID", foreignField:"_id", as:"category"}};
        let UnwindBrandStage = {$unwind:"$brand"} 
        let UnwindCategoryStage = {$unwind:"$category"} 
    
    
    
        let data = await ProductModel.aggregate([
            matchStage,
            joinwbrandStage,
            joinwcategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage
        ])
        return {status:"success", data:data}
        }
        catch(err){
            return {status:"fail", err:err}.toString()
        }
}

const ListBySimilarService = async (req) => {
    try{
        let CategoryID =new ObjectId(req.params.CategoryID);
        let matchStage= {$match:{categoryID:CategoryID}};
        let limit = {$limit:20}

        let joinwbrandStage = {$lookup:{from:"brands",localField:"brandID", foreignField:"_id", as:"brand"}};
        let joinwcategoryStage = {$lookup:{from:"categories",localField:"categoryID", foreignField:"_id", as:"category"}};
        let UnwindBrandStage = {$unwind:"$brand"} 
        let UnwindCategoryStage = {$unwind:"$category"} 



        let data = await ProductModel.aggregate([
            matchStage,
            limit,
            joinwbrandStage,
            joinwcategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage
        ])
        return {status:"success", data:data}
    }   
        
        catch(err){
            return {status:"fail", err:err}.toString()
    }
}


const ListByKeywordService = async (req) => {
    
    try{    
        let SearchRegex={$regex:req.params.Keyword, $option:"i"}
        let SearchStage=[{title: SearchRegex}, {shortDes: SearchRegex}]
        let SearchParams={$or:SearchStage}

        let matchStage={$match:SearchParams}
        let joinwbrandStage = {$lookup:{from:"brands",localField:"brandID", foreignField:"_id", as:"brand"}};
        let joinwcategoryStage = {$lookup:{from:"categories",localField:"categoryID", foreignField:"_id", as:"category"}};
        let UnwindBrandStage = {$unwind:"$brand"} 
        let UnwindCategoryStage = {$unwind:"$category"} 

        let data = await ProductModel.aggregate([
            matchStage,
            limit,
            joinwbrandStage,
            joinwcategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage
    ]) 
    
    return {status:"success", data:data}
    
    }catch(err){
        return {status:"fail", err:err}.toString()
    }

}


const ListByRemarkService = async (req) => {
    
    try{    
        let SearchRegex={$regex:req.params.Remark, $option:"i"}
        let SearchStage=[{title: SearchRegex}, {shortDes: SearchRegex}]
        let SearchParams={$or:SearchStage}

        let matchStage={$match:SearchParams}
        let joinwbrandStage = {$lookup:{from:"brands",localField:"brandID", foreignField:"_id", as:"brand"}};
        let joinwcategoryStage = {$lookup:{from:"categories",localField:"categoryID", foreignField:"_id", as:"category"}};
        let UnwindBrandStage = {$unwind:"$brand"} 
        let UnwindCategoryStage = {$unwind:"$category"} 

        let data = await ProductModel.aggregate([
            matchStage,
            limit,
            joinwbrandStage,
            joinwcategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage
    ]) 
    
    return {status:"success", data:data}
    
    }catch(err){
        return {status:"fail", err:err}.toString()
    }
   
}


const ReviewListService = async (req) => {
    try{
        let ProductID =new ObjectId(req.params.ProductID);
        let matchStage= {$match:{_id:ProductID}};

    
        let data = await ProductModel.aggregate([
            matchStage,
        ])
        return {status:"success", data:data}
        }
        catch(err){
            return {status:"fail", err:err}.toString()
        }}

module.exports={BrandListService,CategoryListService,SliderListService,ListByBrandService,ListByCategoryService,ListBySimilarService,ListByKeywordService,ListByRemarkService,ReviewListService}