import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const languages = [
  {
    name: "Japanese",
    code: "ja",
  },
  {
    name: "Hindi",
    code: "hi",
  },
  {
    name: "Spanish",
    code: "es",
  },
  {
    name: "French",
    code: "fr",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const languageSelectHandler = (code: string): void => {
    navigate(`/learn?language=${code}`);
  };

  return (
    <Container maxWidth={"sm"}>
      <Typography
        textAlign={"center"}
        margin={"2rem"}
        fontSize={"larger"}
        fontWeight={"700"}
      >
        Start Learning!
      </Typography>
      <Stack
        direction={"row"}
        spacing={"2rem"}
        p={"2rem"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {languages.map((language) => (
          <Button key={language.code} variant={"contained"} onClick={() => languageSelectHandler(language.code)}>
            {language.name}
          </Button>
        ))}
      </Stack>
    </Container>
  );
};

export default Home;
