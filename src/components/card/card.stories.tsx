import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card } from "./card";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Card1 = Template.bind({});
Card1.args = {
  card: {
    age: 20,
    name: "Jack",
    image: "https://i.pravatar.cc/1000?u=a042581f4e29026704e",
  },
};

export const Card2 = Template.bind({});
Card2.args = {
  card: {
    age: 24,
    name: "Eva",
    image: "https://i.pravatar.cc/1000?u=a042581f4e29026704x",
  },
};

export const Card3 = Template.bind({});
Card3.args = {
  card: {
    age: 25,
    name: "Noah",
    image: "https://i.pravatar.cc/1000?u=a042581f4e29026704h",
  },
};
