import { Spell } from '@thothai/thoth-core/types'
export default {
  id: 'e19d34b1-65ac-42ff-ac98-88b8cd14cf6a',
  name: 'expected amethyst',
  chain: {
    id: 'demo@0.1.0',
    nodes: {
      '124': {
        id: 124,
        data: {
          name: 'default',
          socketKey: '20c0d2db-1916-433f-88c6-69d3ae123217',
          dataControls: { name: { expanded: true } },
          playtestToggle: { receivePlaytest: true },
        },
        inputs: {},
        outputs: {
          trigger: {
            connections: [{ node: 246, input: 'trigger', data: { pins: [] } }],
          },
        },
        position: [-1555.4724883179474, -132.7648214211178],
        name: 'Module Trigger In',
      },
      '232': {
        id: 232,
        data: {
          name: 'Input',
          text: 'Input text here',
          outputs: [],
          socketKey: '9d61118c-3c5a-4379-9dae-41965e56207f',
          dataControls: {
            name: { expanded: true },
            playtestToggle: { expanded: true },
          },
          defaultValue: 'Input text here',
          playtestToggle: { outputs: [], receivePlaytest: false },
        },
        inputs: {},
        outputs: {
          output: {
            connections: [
              {
                node: 246,
                input: 'string',
                data: {
                  pins: [{ x: -1219.0300903320312, y: -278.76190185546875 }],
                },
              },
            ],
          },
        },
        position: [-1554.8394720686588, -362.87500885530955],
        name: 'Universal Input',
      },
      '233': {
        id: 233,
        data: {
          name: 'output-233',
          socketKey: '940dc29f-91be-4d23-88a6-2b91d41aef15',
        },
        inputs: {
          input: {
            connections: [{ node: 246, output: 'output', data: { pins: [] } }],
          },
          trigger: {
            connections: [{ node: 246, output: 'trigger', data: { pins: [] } }],
          },
        },
        outputs: {
          trigger: {
            connections: [{ node: 247, input: 'trigger', data: { pins: [] } }],
          },
        },
        position: [-783.9329310657348, -406.1566487640127],
        name: 'Output',
      },
      '246': {
        id: 246,
        data: {},
        inputs: {
          trigger: {
            connections: [{ node: 124, output: 'trigger', data: { pins: [] } }],
          },
          string: {
            connections: [
              {
                node: 232,
                output: 'output',
                data: {
                  pins: [{ x: -1219.0300903320312, y: -278.76190185546875 }],
                },
              },
            ],
          },
        },
        outputs: {
          trigger: {
            connections: [{ node: 233, input: 'trigger', data: { pins: [] } }],
          },
          output: {
            connections: [{ node: 233, input: 'input', data: { pins: [] } }],
          },
        },
        position: [-1179.3508911132812, -273.85870361328125],
        name: 'Echo',
      },
      '247': {
        id: 247,
        data: {
          name: 'trigger-out-247',
          socketKey: '02de01cf-48c8-4a90-b9ac-997fb3ce9cf5',
        },
        inputs: {
          trigger: {
            connections: [{ node: 233, output: 'trigger', data: { pins: [] } }],
          },
        },
        outputs: {},
        position: [-689.080810546875, -83.10272216796875],
        name: 'Module Trigger Out',
      },
    },
  },
  createdAt: '2022-06-09T10:51:18.973Z',
  updatedAt: '2022-06-07T23:22:58.901Z',
  deletedAt: null,
  userId: '29476106',
  modules: [],
  gameState: null,
} as unknown as Spell
