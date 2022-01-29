import { Component } from "react";
import PropTypes from 'prop-types';

export class NewsFilters extends Component {
    render() {
        const { currentState: { hasPhoto, hasLink, isSpecial } , handlePhoto, handleLink, handleSpecial, handleSeach } = this.props
        return(
            <div className="filters__container">
                <button className="filters__btn" onClick={ handlePhoto }>
                    { hasPhoto ? 'with filters' : 'without filters' }
                </button>
                <button className="filters__btn" onClick={ handleLink }>
                    { hasLink ? 'with link' : 'without link' }
                </button>
                <button className="filters__btn" onClick={ handleSpecial }>
                    { isSpecial ? 'with special mark' : 'without special mark' }
                </button>
                <label>
                    <input type="text" className="filters__search" onChange={ handleSeach }/>
                </label>
            </div>
        )
    }
}

NewsFilters.propTypes = {
    currentState: PropTypes.shape({
        hasPhoto: PropTypes.bool,
        hasLink: PropTypes.bool,
        isSpecial: PropTypes.bool,
    }),
    handlePhoto: PropTypes.func.isRequired,
    handleLink: PropTypes.func.isRequired,
    handleSpecial: PropTypes.func.isRequired,
    handleSeach: PropTypes.func.isRequired,
}