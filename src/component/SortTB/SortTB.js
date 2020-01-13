import React from 'react'
import { MDBDataTable } from 'mdbreact';
  const data = {
    columns: [
      {
        label: 'TeamName',
        field: 'TeamName',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Point',
        field: 'Point',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Points',
        field: 'Points',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Mistakes',
        field: 'Mistakes',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Broke',
        field: 'Broke',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Overall',
        field: 'Overall',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        TeamName: 'Random Team1',
        Point: 12,
        Points:10,
        Broke: 0,
        Mistakes: 1,
        
        Overall: 123123
      },
      {
        TeamName: 'Random Team2',
        Point: 14,
        Points:3,
        Mistakes: 0,
        Broke: 0,
        Overall: 12
      },{
        TeamName: 'Random Team3',
        Point: 4,
        Points:18,
        Mistakes: 1,
        Broke: 0,
        Overall: 12333
      },
      {
        TeamName: 'Random Team4',
        Point: 0,
        Points:0,
        Mistakes: 0,
        Broke: 1,
        Overall: 123123
      },
      {
        TeamName: 'Random Team5',
        Point: 3,
        Points:3,
        Mistakes: 0,
        Broke: 0,
        Overall: 123
      },
      {
        TeamName: 'Random Team6',
        Point: 20,
        Points:0,
        Mistakes: 1,
        Broke: 0,
        Overall: 85
      },
      {
        TeamName: 'Random Team7',
        Point: 2,
        Points:20,
        Mistakes: 0,
        Broke: 0,
        Overall: 1
      }
    ]
  };

class SortTB extends React.Component {
  render(){
    return (
      <MDBDataTable
        data={data}
      />
    );
  }
}
export default SortTB;