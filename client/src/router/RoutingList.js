import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../page/dashboard/Dashboard';
import ShowCustomers from '../page/customer/ShowCustomers';
import AddCustomer from '../page/customer/AddCustomer';
import ShowEmployees from '../page/employee/ShowEmployees';
import AddEmployee from '../page/employee/AddEmployee';
import ShowProducts from '../page/product/ShowProducts';
import AddProduct from '../page/product/AddProduct';

const routes = [
  {
    path: '/',
    component: Dashboard,
    key: '/',
  },
  {
    path: '/customers',
    component: ShowCustomers,
    key: '/customers',
  },
  {
    path: '/add-customer',
    component: AddCustomer,
    key: '/add-customer',
  },
  {
    path: '/employees',
    component: ShowEmployees,
    key: '/employees',
  },
  {
    path: '/add-employee',
    component: AddEmployee,
    key: '/add-employee',
  },
  {
    path: '/products',
    component: ShowProducts,
    key: '/products',
  },
  {
    path: '/add-product',
    component: AddProduct,
    key: '/add-product',
  },
];

function RoutingList() {
  return routes.map(item => {
    if (item.path.split('/').length === 2) {
      return (
        <Route
          exact
          path={item.path}
          component={item.component}
          key={item.key}
        />
      );
    }
    return <Route path={item.path} component={item.component} key={item.key} />;
  });
}

export default RoutingList;
