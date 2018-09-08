import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Editor from "./components/canner-slate-editor";
import MdEditor from "./components/markdown-editor";
import MdEditorWithSerializer from "./components/markdown-editor/with-serializer";
import MdEditorPasteMd from "./components/markdown-editor/paste-md";
import QuillIcons from "./components/quill-icons";
import HelpMenu from "packages/components/help-menu";
import Sidebar from "./components/sidebar";
import Toolbar from "./components/toolbar";

storiesOf("canner-slate-editor", module)
  .add("Simple demo", () => <Editor />)
  .add("Hot keys & Formatting", () => (
    <div style={{ padding: "30px" }}>
      <HelpMenu />
    </div>
  ));

storiesOf("slate-md-editor", module)
  .add("Simple demo", () => <MdEditor />)
  .add("With HTML serializer", () => <MdEditorWithSerializer />)
  .add("Copy & Paste markdown", () => <MdEditorPasteMd />);

storiesOf("Quill icons", module).add("List", () => <QuillIcons />);

storiesOf("Editor sidebar", module).add("Simple demo", () => <Sidebar />);

storiesOf("Editor popup toolbar", module).add("Simple demo", () => <Toolbar />);
