// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
// import images from "../images/image-qr-code.png";

// export default function ActionAreaCard() {
//   return (
//     <Card
//       className="card"
//       sx={{
//         padding: 2,
//         margin: "auto",
//         marginTop: 12,
//         borderRadius: 3,
//         maxWidth: "20%",
//       }}
//     >
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="250"
//           image={images}
//           alt="scanner"
//           sx={{ borderRadius: "3%" }}
//         />
//         <CardContent>
//           <Typography
//             gutterBottom
//             variant="h6"
//             component="div"
//             textAlign="center"
//           >
//             Improve your front-end skills by building projects
//           </Typography>
//           <Typography variant="body2" color="text.secondary" textAlign="center">
//             Scan the QR code to visit Frontend Mentor and take your coding
//             skills to the next level
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import images from "../images/image-qr-code.png";

export default function ActionAreaCard() {
  return (
    <Card
      sx={{
        maxWidth: 300,
        padding: 2,
        margin: "auto",
        height: 455,
        borderRadius: "4%",
        backgroundColor: " hsl(0, 0%, 100%)",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="290"
          image={images}
          alt="green iguana"
          sx={{ borderRadius: "4%" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            textAlign="center"
            color="hsl(218, 44%, 22%)"
            fontFamily="'Outfit', sans-serif;
            "
            fontWeight="700"
          >
            Improve your front-end skills by building projects
          </Typography>
          <Typography
            variant="body2"
            color="hsl(220, 15%, 55%)"
            textAlign="center"
            fontSize="15px"
            fontFamily="'Outfit', sans-serif;
            "
            fontWeight="400"
          >
            Scan the QR code to visit Frontend Mentor and take your coding //
            skills to the next level
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
