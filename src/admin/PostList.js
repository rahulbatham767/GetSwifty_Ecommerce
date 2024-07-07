// PostList.js
import React from "react";
import { List, Datagrid, TextField } from "react-admin";

const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
    </Datagrid>
  </List>
);

export default PostList;
