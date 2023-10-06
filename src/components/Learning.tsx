import { ArrowBack, VolumeUp } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { translateWords } from "../utils/features";
import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  getWordsFail,
  getWordsRequest,
  getWordsSuccess,
} from "../redux/slice";
import Loader from "./Loader";

const Learning = () => {
  const params = useSearchParams();

  const language = params[0].get("language") as LanguageType;

  const [count, setCount] = useState<number>(0);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { loading, error, words } = useSelector(
    (state: { root: StateType }) => state.root
  );

  const nextHandler = (): void => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    dispatch(getWordsRequest());
    translateWords(language || "hi")
      .then((resWords) => dispatch(getWordsSuccess(resWords)))
      .catch((error) => dispatch(getWordsFail(error)));

    if (error) {
      alert(error);
      dispatch(clearState());
    }
  }, []);

  if (loading) return <Loader />;

  return (
    <Container
      maxWidth={"sm"}
      sx={{
        padding: "1rem",
      }}
    >
      <Button
        onClick={() => setCount((prev) => prev - 1)}
        disabled={count === 0}
      >
        <ArrowBack />
      </Button>
      <Typography m={"2rem 0"}>Learning Made Easy</Typography>

      <Stack direction={"row"} spacing={"1rem"}>
        <Typography variant={"h4"}>
          {count + 1} - {words[count]?.word}
        </Typography>
        <Typography color={"blue"} variant={"h4"}>
          : {words[count]?.meaning}
        </Typography>
        <Button
          sx={{
            borderRadius: "50%",
          }}
        >
          <VolumeUp />
        </Button>
      </Stack>

      <Button
        sx={{
          margin: "3rem 0",
        }}
        variant="contained"
        fullWidth
        onClick={count === 7 ? () => navigate("/quiz") : nextHandler}
      >
        {count === 7 ? "Test" : "Next"}
      </Button>
    </Container>
  );
};

export default Learning;
