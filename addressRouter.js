const router = require('express').Router()

const {
    getAllAddresses,
    createAddresses,
    getAddressById,
    updateAddress,
    deleteAddress

}= require('./addressController')

router.get('/',getAllAddresses)
router.post('/',createAddresses)
router.get('/:id',getAddressById)
router.put('/:id',updateAddress)
router.delete('/:id',deleteAddress)

module.exports = router