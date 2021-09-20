import { shallow } from 'enzyme';
import AddTask from '../../components/AddTask';
import { ITask } from '../../pages/home/useHome';

describe('Test in <AddTask />', () => {
  const handleSubmit = jest.fn();
  const wrapper = shallow(
    <AddTask
      submit={handleSubmit}
    />
  );

  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should to call to action submit', () => {
    const value = `Task's Test`;
    wrapper.find('textarea').simulate('change', {
      target: {
        value,
        name: 'task'
      }
    });
    const formSubmit: any = wrapper.find('form').prop('onSubmit');
    if (formSubmit) {
      formSubmit({ preventDefault() { } });
    }
    const todoData: ITask = {
      task: value,
      isReady: false
    }
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(expect.any(Object)); // { }
    expect(handleSubmit).toHaveBeenCalledWith(todoData);
    expect(wrapper.find('textarea').prop('value')).toBe('');

  });
})
