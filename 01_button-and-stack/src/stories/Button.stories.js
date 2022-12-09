import Button from "../components/Button";

export default{
    title: "components/Button",
    Component: Button,
    argTypes: {handelClick: {action: "handelClick"}},
}

const Template = args => <Button {...args} / >
export const green = Template.bind({})
green.args = {
    backgroundColor : "green",
    label:"press me if you can",
    size: "md"
}

export const red = Template.bind({})
red.args = {
    backgroundColor : "red",
    label:"don't touch",
    size: "md"
}

export const Small = Template.bind({})
Small.args = {
    backgroundColor : "red",
    label:"don't touch",
    size: "sm"
}
export const Large = Template.bind({})
Large.args = {
    backgroundColor : "red",
    label:"don't touch",
    size: "lg"
}

export const LongLabel = Template.bind({})
LongLabel.args = {
    backgroundColor : "red",
    label:"dnjdjfjdnjnkdmok jdofkjdokp jfojdojkodkjofkdfjoj",
    size: "lg"
}





