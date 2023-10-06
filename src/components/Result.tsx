import {
  Button,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearState } from "../redux/slice";

const numberOfCorrectAnswer = (array1: string[], array2: string[]) => {
  let totalCorrectAnswer = 0;
  if (array1.length !== array2.length)
    throw new Error("Length of both the arrays are not equal");

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) totalCorrectAnswer++;
  }
  return totalCorrectAnswer;
};

const Result = () => {
  const { words, result } = useSelector(
    (state: { root: StateType }) => state.root
  );

  const correctAnswer = numberOfCorrectAnswer(
    result,
    words.map((word) => word.meaning)
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const homeClickHandler = () => {
    dispatch(clearState());
    navigate('/');
  };

  return (
    <Container maxWidth={"sm"}>
      <Typography variant="h3" color={"primary"} m={"2rem 0"}>
        Result
      </Typography>
      <Typography variant="h6" m={"1rem"}>
        You got {correctAnswer} right out of {words.length}.
      </Typography>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack>
          <Typography m={"1rem 0"} variant="h5">
            Your Answers
          </Typography>
          <List>
            {result.map((result, i) => (
              <ListItem key={i}>
                {i + 1} - {result}
              </ListItem>
            ))}
          </List>
        </Stack>
        <Stack direction={"column"}>
          <Typography m={"1rem 0"} variant="h5">
            Correct Answers
          </Typography>
          <List>
            {words.map((word, i) => (
              <ListItem key={i}>
                {i + 1} - {word.meaning}
              </ListItem>
            ))}
          </List>
        </Stack>
      </Stack>
      <Button
        sx={{ margin: "1rem" }}
        variant="contained"
        onClick={homeClickHandler}
      >
        Home
      </Button>
    </Container>
  );
};

export default Result;
