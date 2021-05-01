const addresses = require('./Address')

exports.getAllAddresses = (req,res)=>{
    res.json(addresses.getAllAddresses())
}

exports.createAddresses = (req,res)=>{
    let {name,city,district,division}=  req.body
    let address=addresses.createAddress({
        name,city,district,division
    })
    res.json(address)
}

exports.getAddressById = (req,res)=>{
    let {id} = req.params

    id = parseInt(id)

    let address = addresses.getAddressesById(id)
    res.json(address)

}

exports.updateAddress=(req,res)=>{
    let {id} = req.params
    id = parseInt(id)

    let {name,city,district,division} = req.body
    let address = addresses.updateAddressById(id,{
        name,city,district,division
    })

    res.json(address)
}

exports.deleteAddress= (req,res)=>{
    let {id} = req.params
    id= parseInt(id)

    let address = addresses.deleteAddressById(id)
    res.json(address)
}