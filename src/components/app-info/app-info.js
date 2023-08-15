import './app-info.css';

const AppInfo = (props) => {
    const {totalEmployees, employeeBonus} = props;

    return (
        <div className="app-info">
            <h1>Employee counter</h1>
            <h2>Total employees: {totalEmployees}</h2>
            <h2>Bonus goes to: {employeeBonus}</h2>
        </div>
    )
}

export default AppInfo;