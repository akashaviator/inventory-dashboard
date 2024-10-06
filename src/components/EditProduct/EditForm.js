import { Grid2 as Grid } from "@mui/material"
import ProductField from "./ProductField"

const EditForm = ({ formData, handleChange }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item size={6}>
          <ProductField
            label="Category"
            onChange={handleChange}
            value={formData.category}
          />
        </Grid>
        <Grid item size={6}>
          <ProductField
            label="Price"
            value={formData.price}
            onChange={handleChange}
          />
        </Grid>
        <Grid item size={6}>
          <ProductField
            label="Quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </Grid>
        <Grid item size={6}>
          <ProductField
            label="Value"
            value={formData.value}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default EditForm
