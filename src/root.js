import './static/style/common.css'
import './static/style/index.css'
// import 'antd/dist/antd.css';
import 'antd/lib/menu/style/css'
import 'antd/lib/icon/style/css'


import ReactDom from 'react-dom'
import React from 'react'

import Root from './router'

ReactDom.render(<Root />,document.getElementById('root'))