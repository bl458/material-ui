import { createTheme, ThemeProvider } from "@material-ui/core";

import PhotoAlbum from "./PhotoAlbum";

const App = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <PhotoAlbum />
    </ThemeProvider>
  );
};

export default App;
