import { shallow, mount, configure } from "enzyme"
import App from "../index"
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it("input text item test", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('input')).toBeTruthy()
})