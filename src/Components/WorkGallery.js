import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/system/Box";

export default function StandardImageList() {
  return (
    <Box sx={{ width: "100%", height: "85vh", overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={2} gap={16}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} onClick={() => console.log("clicked")}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              // src={`${item.img}?w=248&fit=crop&auto=format`}
              // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  }
];
