import React from 'react';
import Const from '../Const';

class RegexFilter extends React.Component {
	constructor(props) {
		super(props);
		this.filter = this.filter.bind(this);
		this.timeout = null;
	}

	filter(event) {
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
		const self = this;
		const filterValue = event.target.value;
		this.timeout = setTimeout(function() {
			self.props.filterHandler(filterValue, Const.FILTER_TYPE.REGEX);
		}, self.props.delay);
	}

	componentDidMount() {
		if (this.refs.inputText.defaultValue) {
			this.props.filterHandler(this.refs.inputText.defaultValue, Const.FILTER_TYPE.REGEX);
		}
	}

	componentWillUnmount() {
		clearTimeout(this.timeout);
	}

	render() {
		return (
			<input ref="inputText"
				   className="filter text-filter form-control"
				   type="text"
				   onChange={this.filter}
				   placeholder={this.props.placeholder || `Enter Regex for ${this.props.columnName}...`}
				   defaultValue={(this.props.defaultValue) ? this.props.defaultValue : ""} />
		);
	}
};

RegexFilter.propTypes = {
	filterHandler: React.PropTypes.func.isRequired,
	defaultValue: React.PropTypes.string,
	delay: React.PropTypes.number,
	placeholder: React.PropTypes.string,
	columnName: React.PropTypes.string
};

RegexFilter.defaultProps = {
	delay: Const.FILTER_DELAY
}

export default RegexFilter;
