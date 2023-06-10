import PropTypes from 'prop-types'
import css from "./filter.module.css"

export default function Filter({ filter, onChange }) {
    return (
        <div className={css.filter__container}>
            <h3>Filter contacts by name</h3>
            <input
                type="text"
                value={filter}
                onChange={onChange}
            />
        </div>
    )
}

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
}
