class Address {
    constructor(){
        this.addresses= []
    }

    getAllAddresses(){
        return this.addresses
    }

    getAddressesById(id){
        return this.addresses.find(address=>address.id==id)
    }

    createAddress(address){
        address.id=this.addresses.length+1
        this.addresses.push(address)
        return address
    }

    updateAddressById(id,updatedAddress){
        let index = this.addresses.findIndex(address=>address.id==id)
        this.addresses[index].name = updatedAddress.name || this.addresses[index].name
        this.addresses[index].city = updatedAddress.city || this.addresses[index].city
        this.addresses[index].district = updatedAddress.district || this.addresses[index].district
        this.addresses[index].division = updatedAddress.division || this.addresses[index].division
        return this.addresses[index]
    }

    deleteAddressById(id){
        let index = this.addresses.findIndex(address=>address.id==id)
        let deleteAddress = this.addresses[index]
        this.addresses = this.addresses.filter(address=>address.id != id)
        return deleteAddress
    }
}

module.exports = new Address()