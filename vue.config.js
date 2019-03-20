const path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('kl_vant', resolve('extra_ui/kl_vant'))
    },
    css: {
        // 启用 CSS modules for all css / pre-processor files.
        modules: true
    },
}