import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import MomentUtils from '@date-io/moment';
import './Todo.css';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <TableRow key={this.props.name}>
                <TableCell align="center">{this.props.text}</TableCell>
                <TableCell align="center">{this.props.priority}</TableCell>
                <TableCell align="center">{this.props.dueDate.format('DD/MM/YYYY')}</TableCell>
            </TableRow>
            
        );
    }

}