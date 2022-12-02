import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "@chakra-ui/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "chakra/Button",
  component: Button,
  decorators: [withKnobs],
  //   argTypes: {
  //     onClick: { action: "clicked" },
  //   },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  variantColor: "green",
  children: "Success",
  onClick: action("Click Handler"),
};

export const Danger = Template.bind({});
Danger.args = {
  variantColor: "red",
  children: "Danger ",
  onMouseOver: action("hovered"),
  onClick: action("clicked"),
};

export const Log = Template.bind({});
Log.args = {
  children: "Log",
  onClick: () => {
    console.log("clicked");
  },
};

export const Knobs = (
  <Button disabled={boolean("Disabled", false)}>
    {text("Label", "Label Button")}
  </Button>
);
