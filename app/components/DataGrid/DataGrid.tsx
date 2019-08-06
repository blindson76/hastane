import * as React from 'react';
import { FaIcon, Notify } from 'karcin-ui';
import './style.scss';

const ReactDataGrid = require('react-data-grid');
const { Toolbar, Data } = require('react-data-grid-addons');
const defaultColumnProperties = {
	resizable: true,
	sortable: true,
	filterable: true
};
const selectors = Data.Selectors;

class DataGrid extends React.Component<any, any>{

	constructor(props){ super(props);
		this.state = {
			rows: this.props.rows,
			initialRows: this.props.rows,
			columns: this.props.columns.map(c => ({ ...c, ...defaultColumnProperties })),
			filters: {},
			selectedIndexes: []
		};
		this.clearFilters = this.clearFilters.bind(this);
		this.onRowsSelected = this.onRowsSelected.bind(this);
		this.onRowsDeselected = this.onRowsDeselected.bind(this);
	}

	getRows(rows, filters){ return selectors.getRows({ rows, filters }); }

	sortRows(sortColumn, sortDirection){
		const comparer = (a, b) => {
			if ( sortDirection === 'ASC' ){
				return a[sortColumn] > b[sortColumn] ? 1 : -1;
			}else if( sortDirection === 'DESC' ){
				return a[sortColumn] < b[sortColumn] ? 1 : -1;
			}
		};
		this.setState({ rows: sortDirection === 'NONE' ? this.state.initialRows : [...this.state.rows].sort(comparer) });
	};

	handleFilterChange(filter){
		const newFilters = { ...this.state.filters };
		if (filter.filterTerm) {
			newFilters[filter.column.key] = filter;
		}else{
			delete newFilters[filter.column.key];
		}
		this.setState({ filters: newFilters });
	};

	clearFilters(){ this.setState({ filters: {} }); }

	getValidFilterValues(rows, cid){ return rows.map(r => r[cid]).filter((item, i, a) => { return i === a.indexOf(item); }); }

	onRowsSelected(rows){ this.setState({ selectedIndexes: rows.map(r => r.rowIdx) }); };

	onRowsDeselected(rows){
		let rowIndexes = rows.map(r => r.rowIdx);
		this.setState({ selectedIndexes: this.state.selectedIndexes.filter( i => rowIndexes.indexOf(i) === -1 ) });
	};

	dataGridButtons(button){
		if ( button.name === 'Yazdır' || button.name === 'Güncelle' || button.name === 'Sil' ){
			if ( this.state.selectedIndexes.length !== 0 ){
				button.press( this.getRows(this.state.rows, this.state.filters)[ this.state.selectedIndexes ] );
			}else{
				Notify.error({ message: "Listeden bir veri seçtiğinizden emin olun.", position: "top-right", time: 3 });
			}
		}else{
			button.press();
		}
	}

	render(){
		return(
			<div className="dataGridWrapper">

				<div className="dataGridButtons">
					{ this.props.buttons.map((button, index) => (
						<div key={index} onClick={() => this.dataGridButtons(button)} className="dataGridButton">
							<span><FaIcon code={button.icon} /></span>
							<b>{button.name}</b>
						</div>
					)) }
				</div>

				<ReactDataGrid
					rowKey="id"
					columns={this.state.columns}
					rowGetter={i => this.getRows(this.state.rows, this.state.filters)[i]}
					rowsCount={this.state.rows.length}
					minHeight={this.props.height}
					onGridSort={(sortColumn, sortDirection) => this.sortRows(sortColumn, sortDirection) }
					toolbar={<Toolbar enableFilter={true} />}
					onAddFilter={filter => this.handleFilterChange(filter)}
					onClearFilters={this.clearFilters}
					getValidFilterValues={columnKey => this.getValidFilterValues(this.state.rows, columnKey)}
					rowSelection={{
						showCheckbox: true,
						enableShiftSelect: false,
						onRowsSelected: this.onRowsSelected,
						onRowsDeselected: this.onRowsDeselected,
						selectBy: { indexes: this.state.selectedIndexes }
					}}
				/>

			</div>
		);
	}

}

export default DataGrid;