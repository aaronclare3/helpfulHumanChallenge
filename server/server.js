require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const colorData = require("./colorsData.json");
const graphql = require("graphql");
const cors = require("cors");
const path = require("path");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = graphql;
const { graphqlHTTP } = require("express-graphql");

const ColorType = new GraphQLObjectType({
  name: "Color",
  fields: () => ({
    id: { type: GraphQLInt },
    colorCategory: { type: GraphQLString },
    hex: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllColors: {
      type: new GraphQLList(ColorType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return colorData;
      },
    },
    getColor: {
      type: ColorType,
      args: { hex: { type: GraphQLString } },
      resolve(parent, args) {
        return colorData.find((col) => col.hex === args.hex);
      },
    },
  },
});

const schema = new GraphQLSchema({ query: RootQuery });
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log("server running!");
});
