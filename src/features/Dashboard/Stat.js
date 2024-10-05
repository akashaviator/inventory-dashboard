import { Box, Card, CardContent, Grid2, Stack, Typography } from "@mui/material"

export default function Stat({ label, icon, value }) {
  return (
    <Card
      sx={{
        width: "260px",
        bgcolor: "#253326",
        color: "#efefef",
        borderRadius: 2,
        padding: "0px",
      }}
    >
      <CardContent sx={{ padding: "16px !important" }}>
        <Grid2 container gap={1}>
          <Grid2 size={2}>{icon}</Grid2>
          <Grid2 size={9}>
            <Stack direction="column" alignItems="flex-start" gap={1}>
              <Typography fontSize={12}>{label}</Typography>
              <Typography fontSize={24} fontWeight={700}>
                {value}
              </Typography>
            </Stack>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  )
}
