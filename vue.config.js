const path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('kl-vant', resolve('extra-ui/kl-vant'))
    },
    css: {
        // 启用 CSS modules for all css / pre-processor files.
        // 按需加载不要开启模块模式
        modules: false
    }
}