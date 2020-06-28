const carModel = require('../models/car')


exports.CarConstructorQueries = class{

    static findAllCars (){
        return new Promise(async(next)=>{
            carModel.find()
                .then((car)=>{ 
                    next({etat:true, data:car})
                }).catch((err)=>{
                    next({etat:false, erreur:err})
                })
        }) 
    }

    static findCarById (id){
        return new Promise(async(next)=>{
            carModel.findById(id)
                .then((car)=>{ 
                    next({etat:true, data:car})
                }).catch((err)=>{
                    next({etat:false, erreur:err})
                })
        }) 
    }

    static Addcar (data){
        return new Promise(async(next)=>{
            const cars = new carModel({
                name: data.nom,
                legalForm: data.legalForm,
                slogan: data.slogan,
                headOffice: data.headOffice,
                headOffice: data.headOffice,
                capitalization: data.capitalization,
                turnover: data.turnover,
                website: data.website,
                latitude: data.latitude,
                longitude: data.longitude

            }).save().then((car)=>{
                    next({etat: true, data: car })
                }).catch((err)=>{
                    next({etat:false, erreur : err})
                })
        }) 
    }
    static updateCar (id,data){
        return new Promise(async(next)=>{
            // const car = new carModel({
            //     name: data.nom,
            //     legalForm: data.legalForm,
            //     slogan: data.slogan,
            //     headOffice: data.headOffice,
            //     headOffice: data.headOffice,
            //     capitalization: data.capitalization,
            //     turnover: data.turnover,
            //     website: data.website,
            //     latitude: data.latitude,
            //     longitude: data.longitude
            // });
                carModel.findByIdAndUpdate(id,{
                    name: data.name,
                    legalForm: data.legalForm,
                    slogan: data.slogan,
                    headOffice: data.headOffice,
                    headOffice: data.headOffice,
                    capitalization: data.capitalization,
                    turnover: data.turnover,
                    website: data.website,
                    latitude: data.latitude,
                    longitude: data.longitude
                }).then((car)=>{
                    next({etat: true, data: car })
                }).catch((err)=>{
                    next({etat:false, erreur : err})
                })
            
        }) 
    }
    static deleteCarById (id){
        return new Promise(async(next)=>{
            carModel.findByIdAndRemove(id)
                .then((car)=>{ 
                    next({etat:true, data:car})
                }).catch((err)=>{
                    next({etat:false, erreur:err})
                })
        }) 
    }



}