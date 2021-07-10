const tabSchema = {
  title: "Tab schema",
  version: 0,
  description:
    "Tabs are a high level form of organization and represent a discrete workspace in thoth.",
  type: "object",
  properties: {
    name: {
      type: "string",
      primary: true,
    },
    active: {
      type: "boolean",
      default: false,
    },
    layoutJson: {
      type: "object",
    },
    type: {
      type: "string",
    },
    spell: {
      ref: "spell",
      type: "string",
    },
  },
};

export default tabSchema;