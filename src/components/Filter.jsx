import propTypes from 'prop-types';
import { filter } from 'Redux/filterSlise';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const filterVal = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  const onChange = event => {
    dispatch(filter(event.target.value));
  };
  return (
    <label>
      {' '}
      Search
      <input type="text" value={filterVal} onChange={onChange} />
    </label>
  );

};




Filter.propTypes = {
  onChange: propTypes.func,
  value: propTypes.string,
}