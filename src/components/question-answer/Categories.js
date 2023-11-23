import React from "react";
import "./categories.css";
import QuestionAnswerItems from "./QuestionAnswerItems";

import Accordion from "@mui/joy/Accordion";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/joy/AccordionDetails";
import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/joy/AccordionSummary";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/joy/Avatar";
import ListItemContent from "@mui/joy/ListItemContent";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Categories = (props) => {
  const { questionAnswerItems } = props;
  const categories = [
    {
      category: "c1",
      description: "d1",
      qa: [
        { q: "q1", a: "a1" },
        { q: "q2", a: "a2" },
        { q: "q3", a: "a3" },
      ],
    },
    {
      category: "c2",
      description: "d2",
      qa: [
        { q: "q1", a: "a1" },
        { q: "q2", a: "a2" },
        { q: "q3", a: "a3" },
      ],
    },
  ];
  return (
    <div className="categories-container">
      <AccordionGroup
        variant="outlined"
        transition="0.2s"
        sx={{
          borderRadius: "md",
          [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
            {
              paddingBlock: "1rem",
            },
          [`& .${accordionSummaryClasses.button}`]: {
            paddingBlock: "1rem",
          },
        }}
      >
        {Object.keys(questionAnswerItems).map((key) => {
          const categoriesItem = questionAnswerItems[key];
          const { category, description, questionAnswers } = categoriesItem;

          return (
            <Accordion>
              <AccordionSummary>
                <Avatar>
                  <AccountBalanceIcon />
                </Avatar>
                <ListItemContent>
                  <Typography level="title-md">{category}</Typography>
                  <Typography level="body-sm">{description}</Typography>
                </ListItemContent>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={1.5}>
                  <QuestionAnswerItems questionAnswerItems={questionAnswers} />
                </Stack>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </AccordionGroup>
    </div>
  );
};

export default Categories;
