import React from 'react';
import {NavLink} from 'react-router-dom';

const SideNav = ({course}) => {
    const {id, title} = course;
    return (
        <div className="text-center">
            <NavLink to={`/course/id/${id}`}>{title}</NavLink> <hr />
        </div>
    );
};

export default SideNav;