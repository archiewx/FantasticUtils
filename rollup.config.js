import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'

const plugins = [eslint(), babel()]

const commonConf = {
  banner: '',
  footer: '',
  intro: '',
  outro: ''
}

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/gm-utils.js',
      name: 'GmUtils',
      format: 'umd'
    },
    plugins
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/gm-utils.min.js',
      name: 'GmUtils',
      format: 'umd'
    },
    plugins: [...plugins, uglify()]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/gm-utils.esm.js',
      format: 'es'
    },
    plugins
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/gm-utils.common.js',
      format: 'cjs'
    },
    plugins
  }
]
