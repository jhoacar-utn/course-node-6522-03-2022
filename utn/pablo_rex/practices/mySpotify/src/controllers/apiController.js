

module.exports.get_spoty = async (request,response)=>{

    const spoty = await spoty.getAll(); //Esto tambien es una promesa

    return response.json(spoty);


}


const getDocApi = (req,res,next)=>{
    return res.send("Doc API");
}

module.exports.getDocApi = getDocApi;