import { Layout, Model } from "flexlayout-react";
import { useRete, Editor } from "../../contexts/Rete";
import { useSpell } from "../../contexts/Spell";
import StateManager from "./windows/StateManager";
import Playtest from "./windows/Playtest";
import Inspector from "./windows/Inspector/Inspector";

import defaultJson from "./layout.json";
import TabLayout from "../common/TabLayout/TabLayout";
import TextEditor from "./windows/TextEditor";

const model = Model.fromJson(defaultJson);

const Spell = () => {
  const { serialize } = useRete();
  const { saveCurrentSpell } = useSpell();

  const onSave = () => {
    const serialized = serialize();
    saveCurrentSpell({ graph: serialized });
  };

  const onSerialize = () => {
    const serialized = serialize();
    console.log(JSON.stringify(serialized));
  };

  const toolbar = (
    <>
      <button className="option" onClick={onSave}>
        Save
      </button>
      <button className="option">Load</button>
      <button className="option" onClick={onSerialize}>
        Export
      </button>
    </>
  );

  const options = (
    <>
      <button className="option">State Manager</button>
      <button className="option">Playtest</button>
      <button className="option">Inspector</button>
    </>
  );

  const factory = (node) => {
    const component = node.getComponent();
    switch (component) {
      case "editor":
        return <Editor />;
      case "stateManager":
        return <StateManager node={node} />;
      case "playtest":
        return <Playtest />;
      case "inspector":
        return <Inspector node={node} />;
      case "textEditor":
        return <TextEditor node={node} />;
      default:
        return <p></p>;
    }
  };

  return (
    <TabLayout options={options} toolbar={toolbar}>
      <Layout model={model} factory={factory} />
    </TabLayout>
  );
};

export default Spell;