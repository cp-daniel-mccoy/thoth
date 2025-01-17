import { Spell } from '@thothai/thoth-core/types'
export default {
  id: '9b970450-4a0f-43cd-8763-ce0920f9ce1e',
  name: 'unfortunate olive',
  chain: {
    id: 'demo@0.1.0',
    nodes: {
      '124': {
        id: 124,
        data: {
          name: 'default',
          error: false,
          success: false,
          socketKey: '20c0d2db-1916-433f-88c6-69d3ae123217',
          nodeLocked: true,
          dataControls: {
            name: { expanded: true },
            playtestToggle: { expanded: true },
          },
          playtestToggle: { receivePlaytest: true },
        },
        inputs: {},
        outputs: {
          trigger: {
            connections: [{ node: 764, input: 'trigger', data: { pins: [] } }],
          },
        },
        position: [-1735.7923282597962, -114.13292905935491],
        name: 'Module Trigger In',
      },
      '233': {
        id: 233,
        data: {
          name: 'output',
          error: false,
          display:
            'Press is a free WordPress theme made by Tom Usborne, a programmer from Canada. I’ve really seen it for many years from the WordPress repository. Most of you know that I am fairly picky when it comes to web performance, and so I tend to ignore everything from the repository. Typically because',
          success: false,
          socketKey: 'ba6ed95b-3aac-49e9-91ae-a33f5510c83b',
          nodeLocked: true,
          dataControls: {
            name: { expanded: true },
            sendToPlaytest: { expanded: true },
          },
          sendToPlaytest: true,
        },
        inputs: {
          input: {
            connections: [
              { node: 756, output: 'result', data: { pins: [] } },
              { node: 757, output: 'nope', data: { pins: [] } },
            ],
          },
          trigger: {
            connections: [
              { node: 756, output: 'trigger', data: { pins: [] } },
              { node: 757, output: 'trigger', data: { pins: [] } },
            ],
          },
        },
        outputs: { trigger: { connections: [] } },
        position: [-179.2551319405378, -378.55595753684764],
        name: 'Output',
      },
      '646': {
        id: 646,
        data: {
          name: 'input',
          text: 'yes',
          display: 'yes',
          success: false,
          socketKey: '3a9cfde5-32a0-4e96-9de7-7571a7a4e784',
          nodeLocked: true,
          dataControls: {
            name: { expanded: true },
            useDefault: { expanded: true },
            playtestToggle: { expanded: true },
          },
          defaultValue: 'no',
          playtestToggle: { receivePlaytest: true },
        },
        inputs: {},
        outputs: {
          output: {
            connections: [{ node: 764, input: 'input', data: { pins: [] } }],
          },
        },
        position: [-1756.7490443350143, -376.7788066492969],
        name: 'Universal Input',
      },
      '756': {
        id: 756,
        data: {
          stop: '\\n',
          temp: 0.7,
          error: false,
          display:
            'Press is a free WordPress theme made by Tom Usborne, a programmer from Canada. I’ve really seen it for many years from the WordPress repository. Most of you know that I am fairly picky when it comes to web performance, and so I tend to ignore everything from the repository. Typically because',
          fewshot: 'Generate',
          success: false,
          maxTokens: 50,
          dataControls: {
            name: { expanded: true },
            stop: { expanded: true },
            temp: { expanded: true },
            model: { expanded: true },
            inputs: { expanded: true },
            fewshot: { expanded: true },
            maxTokens: { expanded: true },
            frequencyPenalty: { expanded: true },
          },
        },
        inputs: {
          trigger: {
            connections: [{ node: 765, output: 'true', data: { pins: [] } }],
          },
        },
        outputs: {
          trigger: {
            connections: [{ node: 233, input: 'trigger', data: { pins: [] } }],
          },
          result: {
            connections: [{ node: 233, input: 'input', data: { pins: [] } }],
          },
          composed: { connections: [] },
        },
        position: [-582.8705727637084, -690.7753442242042],
        name: 'Generator',
      },
      '757': {
        id: 757,
        data: {
          code: "\n// inputs: dictionary of inputs based on socket names\n// data: internal data of the node to read or write to nodes data state\n// state: access to the current game state in the state manager window. Return state to update the state.\nfunction worker(inputs, data, state) {\n\n  // Keys of the object returned must match the names \n  // of your outputs you defined.\n  // To update the state, you must return the modified state.\n  return {nope: 'nope'}\n}\n",
          display: '{"nope":"nope"}',
          outputs: [
            {
              name: 'nope',
              taskType: 'output',
              socketKey: 'nope',
              socketType: 'anySocket',
              connectionType: 'output',
            },
          ],
          success: false,
          dataControls: {
            code: { expanded: true },
            name: { expanded: true },
            inputs: { expanded: true },
            outputs: { expanded: true },
          },
        },
        inputs: {
          trigger: {
            connections: [{ node: 765, output: 'false', data: { pins: [] } }],
          },
        },
        outputs: {
          nope: {
            connections: [{ node: 233, input: 'input', data: { pins: [] } }],
          },
          trigger: {
            connections: [{ node: 233, input: 'trigger', data: { pins: [] } }],
          },
        },
        position: [-559.1233977692019, -158.30703900660217],
        name: 'Code',
      },
      '764': {
        id: 764,
        data: {
          code: "\n// inputs: dictionary of inputs based on socket names\n// data: internal data of the node to read or write to nodes data state\n// state: access to the current game state in the state manager window. Return state to update the state.\nfunction worker(inputs, data, state) {\n\n  // Keys of the object returned must match the names \n  // of your outputs you defined.\n  // To update the state, you must return the modified state.\n  return {output: inputs.input === 'yes'}\n}\n",
          dataControls: {
            name: { expanded: true },
            inputs: { expanded: true },
            outputs: { expanded: true },
            code: { expanded: true },
          },
          name: 'is yes',
          inputs: [
            {
              name: 'input',
              taskType: 'output',
              socketKey: 'input',
              connectionType: 'input',
              socketType: 'anySocket',
            },
          ],
          outputs: [
            {
              name: 'output',
              taskType: 'output',
              socketKey: 'output',
              connectionType: 'output',
              socketType: 'anySocket',
            },
          ],
          display: '{"output":true}',
          success: false,
        },
        inputs: {
          trigger: {
            connections: [{ node: 124, output: 'trigger', data: { pins: [] } }],
          },
          input: {
            connections: [{ node: 646, output: 'output', data: { pins: [] } }],
          },
        },
        outputs: {
          trigger: {
            connections: [{ node: 765, input: 'trigger', data: { pins: [] } }],
          },
          output: {
            connections: [{ node: 765, input: 'boolean', data: { pins: [] } }],
          },
        },
        position: [-1347.904741156958, -331.91528521654504],
        name: 'Code',
      },
      '765': {
        id: 765,
        data: { success: false },
        inputs: {
          boolean: {
            connections: [{ node: 764, output: 'output', data: { pins: [] } }],
          },
          trigger: {
            connections: [{ node: 764, output: 'trigger', data: { pins: [] } }],
          },
        },
        outputs: {
          true: {
            connections: [{ node: 756, input: 'trigger', data: { pins: [] } }],
          },
          false: {
            connections: [{ node: 757, input: 'trigger', data: { pins: [] } }],
          },
        },
        position: [-948.140606080078, -344.29304631970314],
        name: 'Boolean Gate',
      },
    },
  },
  createdAt: '2022-06-01T22:46:39.699Z',
  updatedAt: '2022-06-02T01:44:07.070Z',
  deletedAt: null,
  userId: '2508068',
  modules: [],
  gameState: {
    introText:
      'This is a simple AI generator app. Type anything and let the AI continue ',
  },
} as unknown as Spell
