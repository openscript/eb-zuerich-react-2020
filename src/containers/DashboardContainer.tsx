import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardContainer: React.FC = () => {
    return (
        <div>
            <Link to='/users'>Users</Link>
        </div>
    );
}