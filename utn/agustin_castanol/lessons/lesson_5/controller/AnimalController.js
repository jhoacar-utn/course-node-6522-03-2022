const Animal= require ("../model/Animal")

export const get_animals=(_req,res)=>{
    return res.json(Animal.getAll())
}