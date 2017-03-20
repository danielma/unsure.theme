exports.paths = {
  public: 'static',
}

exports.modules = {
  nameCleaner: path => path.replace(/^app\/javascripts\//, '')
}

exports.files = {
  javascripts: {
    joinTo: {
      'javascripts/app.js': /\.js$/,
    },
  },
  stylesheets: {
    joinTo: 'stylesheets/app.css',
  }
};

exports.plugins = {
  babel: {presets: ['env']},
  sass: {
    mode: 'native',
  },
};
