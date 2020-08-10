import React from 'react';
import CapChart from './CapChart';
class BreakdownChart extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props)
    }

    daysBetween(firstDate, secondDate) {
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      return Math.round(Math.abs((firstDate - secondDate) / oneDay));
    }
  
    render() {   
      this.monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December" ]
      return (   
        <div>    
            <h3 style={{textAlign: "center"}}>{this.props.title} Breakdown</h3> 
        <CapChart height = {this.props.height} data = {[this.props.chartSettings, 
          [1,
          'BA: ' + this.monthNames[new Date(this.props.baEndDate).getMonth()] + ' ' + this.props.baEndDate.substring(8, 10)+ ', ' + this.props.baEndDate.substring(0, 4),
          null,
          new Date(this.props.startDate),
          new Date(this.props.baEndDate),
          null,
          this.props.endDate && new Date(this.props.baEndDate) >= new Date(this.props.endDate) ? Math.round(100 * this.daysBetween(new Date(this.props.startDate), new Date(this.props.endDate))/ this.daysBetween(new Date(this.props.startDate), new Date(this.props.baEndDate))) : 100,
          null,], 
          [2,
          'QA: ' + this.monthNames[new Date(this.props.qaEndDate).getMonth()] + ' ' + this.props.qaEndDate.substring(8, 10)+ ', ' + this.props.qaEndDate.substring(0, 4),
          null,
          new Date(this.props.startDate),
          new Date(this.props.qaEndDate),
          null,
          this.props.endDate && new Date(this.props.qaEndDate) >= new Date(this.props.endDate) ? Math.round(100 * this.daysBetween(new Date(this.props.startDate), new Date(this.props.endDate))/ this.daysBetween(new Date(this.props.startDate), new Date(this.props.qaEndDate))) : 100,
          null,], 
          [3,
          'Dev: ' + this.monthNames[new Date(this.props.devEndDate).getMonth()] + ' ' + this.props.devEndDate.substring(8, 10)+ ', ' + this.props.devEndDate.substring(0, 4),
          null,
          new Date(this.props.startDate),
          new Date(this.props.devEndDate),
          null,
          this.props.endDate && new Date(this.props.devEndDate) >= new Date(this.props.endDate) ? Math.round(100 * this.daysBetween(new Date(this.props.startDate), new Date(this.props.endDate))/ this.daysBetween(new Date(this.props.startDate), new Date(this.props.devEndDate))) : 100,
          null,],]} />
        </div>
      )
    }
  }
  
  export default BreakdownChart;