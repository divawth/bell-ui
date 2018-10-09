module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['mocha', 'chai'],
    plugins: ['karma-mocha', 
      'karma-chai', 
      'karma-chrome-launcher', 
      'karma-coverage',
      'babel-plugin-istanbul',
      'karma-rollup-preprocessor'
    ],
    reporters: ['coverage'],
    
    coverageReporter: {
      // 配置生成的代码覆盖率文件存放位置
      dir: './coverage',
      reporters: [
        // 生成 lcov.info 以及 html 文件，lcov.info 该文件中包含了详细的每个文件，每行，每个函数的执行信息。
        { type: 'lcov', subdir: '.' },
        // 在命令行输出简要覆盖率数据
        { type: 'text-summary' }
      ]
    },
    
    singleRun: true,
    
    files: [{ pattern: 'alert/alert.spec.js', watched: false }],
 
    preprocessors: {
      'alert/alert.spec.js': ['rollup'],
      'alert/alert.spec.js': ['rollupBabel']
    },

    rollupPreprocessor: {
      plugins: [require('rollup-plugin-buble')()],
      output: {
        format: 'iife',
        name: 'bell-ui',
        sourcemap: 'inline'
      }
    },

    customPreprocessors: {
        /**
         * Clones the base preprocessor, but overwrites
         * its options with those defined below...
         */
        rollupBabel: {
            base: 'rollup',
            options: {
                // In this case, to use a different transpiler:
                plugins: [require('rollup-plugin-babel')()]
            }
        }
    }
  })
}