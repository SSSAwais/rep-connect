import React, { forwardRef, useEffect } from "react";
import MaterialTable from "material-table";
import { useState } from "react";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import { TablePagination, Paper } from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import { ThemeProvider, createTheme } from "@mui/material";

import moment from "moment/moment";
import "./ordre.css";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { token } from "@/hooks/token";
const tableIcons = {
  Delete: forwardRef((props, ref) => <DeleteIcon {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  View: forwardRef((props, ref) => (
    <VisibilityOutlinedIcon {...props} ref={ref} />
  )),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
};

const OrderCart = () => {
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const [isloading, setIsloading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const columns = [
    {
      title: "Sr",
      field: "_id",
      render: (rowData, rowCol) => {
        return rowData.tableData.id + 1;
      },
    },
    {
      title: "Order #",
      field: "order_id",
      render: (rowData, rowCol) => {
        return `order#${rowData.order_id}`;
      },
    },
    {
      title: "Order Status",
      field: "order_status",
      render: (rowData) => {
        return (
          <span className={`order-status ${rowData.order_status}`}>
            {rowData.order_status}
          </span>
        );
      },
    },

    {
      title: "Date",
      field: "createdAt",
      render: (rowData) => {
        return moment(rowData.createdAt).format("LL");
      },
    },

    {
      title: "Price",
      field: "products.total",
      render: (rowdata) => {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(rowdata.products.total);
      },
    },
  ];
  const defaultMaterialTheme = createTheme();
  const [entries, setEnteries] = useState([]);

  const hanldeUpdated = (event, data) => {
    router.push(`/admin/order/update/${data._id}`);
  };
  const hanldeViewd = (event, data) => {
    router.push(`/admin/order/view/${data._id}`);
  };

  // GET ALL ORDER FUNCTION
  const getAllOrders = () => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/order`, {
      method: "GET",
      headers: {
        "x-auth-token": token(),
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        if (data.success === 1) {
          setEnteries(data.data.orders);
          setIsloading(false);
        } else {
          setIsError(true);
          setErrorMessage(data.message);
        }
      });
  };

  // INVOKED FUNCTION
  useEffect(() => {
    getAllOrders();
  }, []);
  return (
    <>
      {isError ? (
        <h2>{errorMessage}</h2>
      ) : (
        <React.Fragment>
          <ThemeProvider theme={defaultMaterialTheme}>
            <MaterialTable
              title="Orders"
              icons={tableIcons}
              columns={columns}
              data={entries}
              actions={[
                {
                  icon: () => <Edit />,
                  // tooltip: "Change Status",
                  onClick: (event, data) => hanldeUpdated(event, data),
                },
                {
                  icon: () => <VisibilityOutlinedIcon />,
                  // tooltip: "Change Status",
                  onClick: (event, data) => hanldeViewd(event, data),
                },
              ]}
              isLoading={isloading}
              options={{
                // pageSize: 10,
                // pageSizeOptions: [5, 10, 15, 20],
                actionsColumnIndex: -1,
                exportButton: false,
                sorting: true,
                search: true,
                paging: true,
                debounceInterval: 100,
                headerStyle: {
                  fontWeight: "bold",
                },
              }}
              components={{
                Pagination: (props) => <TablePagination {...props} />,
                Container: (props) => <Paper {...props} elevation={0} />,
              }}
            />
          </ThemeProvider>
          <ToastContainer />
        </React.Fragment>
      )}
    </>
  );
};

export default OrderCart;
