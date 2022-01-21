import React from 'react'
import StationTree from '../../shared/station-tree';
import { Table, Tag, Space } from 'antd';

import './index.less';
import ReactECharts from 'echarts-for-react';
import WaterLevel from '../../shared/water-level';

const Example = () => {

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      lev:1
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
      lev:3
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
      lev:6
    },
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
    {
      title: '水质类别',
      key: 'lev',
      dataIndex: 'lev',
      render: lev => (
        <WaterLevel  level={lev} />
      ),
    },
  ];

  const getOption = () => {
    return {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    }
  }


  return (
    <div className="station_warp">
      <div>
        <StationTree />
      </div>
      <div className="card_warp">
      <Table columns={columns} dataSource={data}  bordered/>

      <ReactECharts
        option={getOption()}
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
        style={{ height: '300px', width: '100%' }}
      />
      </div>


    </div>
  )
}

export default Example
