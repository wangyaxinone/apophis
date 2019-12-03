export default [
    {
        title: '基础组件',
        children: [
            {
                elName: 'my-text',
                title: '文字',
                icon: 'iconfont iconwenben',
                // 每个组件设置props来展示哪些显示哪些编辑项
                valueType: '', // 标识数据类型，用于表单组件
                defaultStyle: {
                    height: 40
                }
            },
            {
                elName: 'my-image',
                title: '图片',
                icon: 'iconfont icontupian',
                valueType: '', // 标识数据类型，用于表单组件,
                defaultStyle: {
                    height: 200
                }
            },
            {
                elName: 'my-button',
                title: '按钮',
                icon: 'iconfont iconanniuzu',
                // 每个组件设置props来展示哪些显示哪些编辑项
                valueType: '', // 标识数据类型，用于表单组件
                defaultStyle: {
                    width: 140,
                    height: 40,
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderColor: '#999999',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderRadius: 4
                }
            },
            {
                elName: 'my-rectangle-border',
                title: '矩形边框',
                icon: 'iconfont iconjuxing',
                valueType: '',
                defaultStyle: {
                    width: 120,
                    height: 100,
                    borderColor: '#999999',
                    borderStyle: 'solid',
                    borderWidth: 2
                }
            },
            {
                elName: 'my-rectangle-border',
                title: '分割线',
                icon: 'iconfont icon758bianjiqi_fengexian',
                valueType: '',
                defaultStyle: {
                    height: 1,
                    width: 300,
                    backgroundColor: '#999999'
                }
            },
            {
                elName: 'my-image-carousel',
                title: '图片轮播',
                icon: 'iconfont iconshouyelunbotu',
                valueType: '', // 标识数据类型，用于表单组件,
                defaultStyle: {
                    height: 210
                }
            },
            {
                elName: 'my-iframe',
                title: '内嵌iframe',
                icon: 'iconfont iconiframetianjia',
                valueType: '',
                defaultStyle: {
                    width: 300,
                    height: 300,
                    paddingTop: 10,
                    paddingBottom: 10
                }
            }
        ]
    }
];
