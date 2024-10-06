import { TextField } from "@mui/material"

const ProductField = ({ label, value, onChange }) => {
  return (
    <TextField
      variant="standard"
      label={label}
      name={label.toLowerCase()}
      value={value}
      onChange={onChange}
      fullWidth
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
    />
  )
}
export default ProductField
