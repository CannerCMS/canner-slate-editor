import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Editor from "./components/canner-slate-editor";
import MdEditor from "./components/markdown-editor";
import MdEditorWithSerializer from "./components/markdown-editor/with-serializer";
import QuillIcons from "./components/quill-icons";
import Sidebar from "./components/sidebar";
import Toolbar from "./components/toolbar";

storiesOf("canner-slate-editor", module).add("Simple demo", () => <Editor />);

storiesOf("slate-md-editor", module)
  .add("Simple demo", () => <MdEditor />)
  .add("With HTML serializer", () => <MdEditorWithSerializer />);

storiesOf("Quill icons", module).add("List", () => <QuillIcons />);

storiesOf("Editor sidebar", module).add("Simple demo", () => <Sidebar />);

storiesOf("Editor popup toolbar", module).add("Simple demo", () => <Toolbar />);
