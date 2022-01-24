import React, { useState, useEffect } from 'react'
import IconFont from '../../shared/IconFont';
import './index.less'
import { fullScreen, exitScreen, isFullScreen } from '../../core/fullScreen';
import { NavLink, Link, Outlet  } from 'react-router-dom';

const Header = () => {
  const [fullOrno, setfullOrno] = useState(true)
  const tabItem = [
    {
      name: 'test',
      text: '测试',
      path: '/test',
      icon: 'youji'
    },
    {
      name: 'map',
      text: '站点地图',
      path: '/map',
      icon: 'zhandianditu'
    },
    {
      name: 'realtime',
      text: '实时列表',
      path: '/home',
      icon: 'shujukanban'
      // tabSon: [
      //   {
      //     name: 'module1',
      //     text: '模板1',
      //     path: '/test'
      //   },
      //   {
      //     name: 'module2',
      //     text: '模板2',
      //     path: '/test'
      //   },
      //   {
      //     name: 'module3',
      //     text: '模板3',
      //     path: '/test'
      //   },
      //   {
      //     name: 'module4',
      //     text: '模板4',
      //     path: '/test'
      //   }
      // ]
    },
    {
      name: 'project',
      text: '项目管理',
      path: '/project',
      icon: 'navicon-jgda'
    },
    {
      name: 'factor',
      text: '因子管理',
      path: '/factor',
      icon: 'network'
    },
    {
      name: 'station',
      text: '国控站管理',
      path: '/station',
      icon: 'zuzhiqunzu'
    }
  ]

  const screenClick = () => {
    if (!isFullScreen()) {
      fullScreen()
      setfullOrno(false)
    } else {
      exitScreen()
      setfullOrno(true)
    }
  }

  const handleTabChange = (name) => {
    switch (name) {
      case 'realtime':
        break
      case 'project':
        break
      case 'factor':
        break
      case 'station':
        break
      default:
    }
  }
  let activeStyle = {
    color:'#fff',
    background:'#07357b'
  };
  const creatMenu = () => {
    let res = tabItem.map(item => {
      return (
        <React.Fragment key={item.name}>
          <NavLink to={item.path}  style={ ({isActive}) => isActive? activeStyle: undefined }>
            <li className="li-outer">
              <div className="tab-item" onClick={() => handleTabChange(item.name)}>
                <IconFont iconName={item.icon} size="16" />
                <span style={{ marginLeft: '4px' }}>{item.text} </span>
              </div>
              {/* <ul className="head-li-ul">
              {
                item.tabSon.map(jtem => {
                  return <Link to={jtem.path}>
                    <li className="li-inner">{jtem.text}</li>
                  </Link>
                })
              }

            </ul> */}
            </li>

          </NavLink>
        </React.Fragment>
      )
    })
    return res
  }

  return (
    <>
      <div className="page-title">
        <div className="title">
          <span>网格化微站管理平台</span>
        </div>
        <div className="head-right">
          <ul className="head-ul">
            {
              creatMenu()
            }
            {
              fullOrno ?
                <li className="li-outer scrren">
                  <div className="tab-item" onClick={screenClick}>
                    <IconFont iconName="quanping" size="14" />
                    
                    <span style={{ marginLeft: '4px' }}>全屏</span>
                  </div>
                </li>
                :
                <li className="li-outer scrren">
                  <div className="tab-item" onClick={screenClick}>
                    <IconFont iconName="huanyuanhuabu" size="14" />
                    <span style={{ marginLeft: '4px' }}>取消</span>
                  </div>
                </li>
            }

            {/* <li className="li-outer">
          <User />
        </li> */}
          </ul>
        </div >
      </div >
    </>
  )
}

export default Header
