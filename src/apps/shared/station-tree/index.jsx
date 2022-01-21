import React, { ReactNode, useState, useEffect } from 'react'
import { Input, Tree } from 'antd'
import { DownOutlined, SearchOutlined, CarryOutOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { _get, _post } from '../../server/http'

import './index.less'

const StationTree = () => {
  const [showTree, setShowTree] = useState(true)
  const [currentTab, setCurrentTab] = useState(1)

  useEffect(() => {
    _post('api/tree/station').then(res => {
      console.log(res);

    })
  }, [])

  const changeTab = (index) => {
    setCurrentTab(index)
  }

  const selectNode = (ele) => {
    console.log(ele);

  }
  const handleInpuChange = (params) => {
    console.log(params);

  }
  const toogleTree = () => {
    setShowTree(!showTree)
  }

  const treeData =
    [
      {
        title: 'parent 1',
        key: '0-0',
        icon: <PlusSquareOutlined />,
        children: [
          {
            title: 'parent 1-0',
            key: '0-0-0',
            icon: <CarryOutOutlined />,
            children: [
              {
                title: 'leaf',
                key: '0-0-0-0',
                isLeaf: true,
              },
              {
                title: 'leaf',
                key: '0-0-0-1',
                isLeaf: true,
              },
              {
                title: 'leaf',
                key: '0-0-0-2',
              },
            ],
          },
          {
            title: 'parent 1-1',
            key: '0-0-1',
            icon: <CarryOutOutlined />,
            children: [
              {
                title: 'leaf',
                key: '0-0-1-0',
              },
            ],
          },
          {
            title: 'parent 1-2',
            key: '0-0-2',
            icon: <CarryOutOutlined />,
            children: [
              {
                title: 'leaf',
                key: '0-0-2-0',
              },
              {
                title: 'leaf',
                key: '0-0-2-1',
              },
            ],
          },
        ],
      }
    ]

  const onExpand = () => {
    console.log('Trigger Expand');
  };
  const tabInner = () => {
    if (currentTab == 1) {
      return (
        <div className="tree_warp">
          <Input suffix={<SearchOutlined />} placeholder='站点名称' onChange={handleInpuChange} />
          <div className="station_tree">
            <Tree
              showLine
              // defaultExpandedKeys={['0-0-0']}
              defaultExpandAll
              onSelect={selectNode}
              treeData={treeData}
              onExpand={onExpand}
            ></Tree>
          </div>
        </div>
      )
    }
    if (currentTab == 2) {
      return (
        <div className="tree_warp">
          <Input prefix="￥" suffix="RMB" />
        </div>
      )
    }

    if (currentTab == 3) {
      return (
        <div className="tree_warp">
          <Input prefix="￥" suffix="RMB" />
        </div>
      )
    }
  }



  return (
    <div className={showTree ? 'AllTree_warp hasWidth' : 'AllTree_warp'} style={{ height: '100vh' }}>
      <div style={{ display: showTree ? 'block' : 'none' }}>
        <div className="sort">
          <div className={currentTab == 1 ? 'active' : ''} onClick={() => changeTab(1)}>区域</div>
          <div className={currentTab == 2 ? 'active' : ''} onClick={() => changeTab(2)}>河流</div>
          <div className={currentTab == 3 ? 'active' : ''} onClick={() => changeTab(3)}>分组</div>
        </div>

        {
          tabInner()
        }

      </div>
     
      <i className={`foldIcon ${showTree ? 'canOpen':null }`} onClick={toogleTree}></i>
    </div>
  )
}

export default StationTree
