import { Grid2 as Grid, TextField } from "@mui/material"

const EditForm = ({ formData, handleChange }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item size={6}>
          <TextField
            variant="standard"
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            fullWidth
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </Grid>
        <Grid item size={6}>
          <TextField
            variant="standard"
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            fullWidth
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </Grid>
        <Grid item size={6}>
          <TextField
            variant="standard"
            label="Quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            fullWidth
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </Grid>
        <Grid item size={6}>
          <TextField
            variant="standard"
            label="Value"
            name="value"
            value={formData.value}
            onChange={handleChange}
            fullWidth
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default EditForm
