import React from "react";
import "./categories.css";
import QuestionAnswerItems from "./QuestionAnswerItems";

import Accordion from "@mui/joy/Accordion";
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

import EditNotificationsRoundedIcon from '@mui/icons-material/EditNotificationsRounded';

import AccordionGroup from '@mui/joy/AccordionGroup';


const Categories = (props) => {
  const { questionAnswerList } = props;
  const categories = [
    { category: "c1", description: "d1", qa: [{ q: "q1", a: "a1" }, { q: "q2", a: "a2" }, { q: "q3", a: "a3" }] },
    { category: "c2", description: "d2", qa: [{ q: "q1", a: "a1" }, { q: "q2", a: "a2" }, { q: "q3", a: "a3" }] }
  ];
  return (
    <div className="categories-container">
     <AccordionGroup
      variant="plain"
      transition="0.2s"
      sx={{
        borderRadius: 'md',
        [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
          {
            paddingBlock: '1rem',
          },
        [`& .${accordionSummaryClasses.button}`]: {
          paddingBlock: '1rem',
        },
      }}
    >
      {categories.map((categoriesItem) => {
        const { category, description, qa } = categoriesItem;

        return (
          <Accordion>
            <AccordionSummary>
              <Avatar color="success">
                <EditNotificationsRoundedIcon />
              </Avatar>
              <ListItemContent>
                <Typography level="title-md">{category}</Typography>
                <Typography level="body-sm">{description}</Typography>
              </ListItemContent>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={1.5}>
                <QuestionAnswerItems questionAnswerItems={qa} />
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
