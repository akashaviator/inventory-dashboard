import React, { useState } from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  Typography,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useDispatch } from "react-redux"
import { editItem } from "../../features/Dashboard/inventorySlice"
import EditForm from "./EditForm"

const EditProduct = ({ product, showModal, onClose }) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    category: "",
    price: "",
    quantity: "",
    value: "",
  })

  const handleSave = () => {
    let newData = {}
    if (formData.category) newData.category = formData.category
    if (formData.price) newData.price = `$${formData.price}`
    if (formData.quantity) newData.quantity = parseInt(formData.quantity)
    if (formData.value) newData.value = `$${formData.value}`
    dispatch(
      editItem({ name: product.name, newData: { ...product, ...newData } })
    )
    onClose()
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Dialog
      open={showModal}
      onClose={onClose}
      sx={{ width: "auto" }}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontWeight={700}>Edit Product</Typography>
        <IconButton
          edge="end"
          onClick={onClose}
          aria-label="close"
          color="primary"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography mb={2}>{product.name}</Typography>
        <EditForm formData={formData} handleChange={handleChange} />
      </DialogContent>
      <DialogActions sx={{ marginRight: "20px" }}>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          disabled={!Object.values(formData).some((item) => item.length > 0)}
          onClick={handleSave}
          color="primary"
          variant="outlined"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditProduct
