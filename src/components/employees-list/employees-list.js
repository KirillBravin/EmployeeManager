import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <div>
                <EmployeesListItem
                    key={id}
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleProp = {(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                />
            </div>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;